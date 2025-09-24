import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Student } from "../models/Student.js";
import { Faculty } from "../models/Faculty.js";
import { Otp } from "../models/Otp.js";
import { sendEmail } from "../utils/sendEmail.js";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function signup(req, res) {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ message: "email, password, role are required" });
    }
    if (["student", "faculty"].includes(role) === false) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const Model = role === "student" ? Student : Faculty;
    const existing = await Model.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    const code = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await Otp.deleteMany({ email, role });
    await Otp.create({ email, role, code, expiresAt });

    try {
      await sendEmail({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        from: process.env.SMTP_FROM,
        to: email,
        subject: "Your UniFolio OTP",
        text: `Your OTP is ${code}. It expires in 5 minutes.`,
        html: `<p>Your OTP is <b>${code}</b>. It expires in 5 minutes.</p>`,
      });
    } catch (mailErr) {
      if (process.env.NODE_ENV === "production") {
        return res.status(500).json({ message: "Failed to send OTP email" });
      }
    }

    return res.status(200).json({ message: "OTP sent to email", devOtp: code });
  } catch (err) {
    return res.status(500).json({ message: "Signup failed", error: err.message });
  }
}

export async function verifyOtp(req, res) {
  try {
    const { email, role, otp, password } = req.body;
    if (!email || !role || !otp || !password) {
      return res.status(400).json({ message: "email, role, otp, password are required" });
    }
    if (["student", "faculty"].includes(role) === false) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const record = await Otp.findOne({ email, role, code: otp });
    if (!record) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    if (record.expiresAt < new Date()) {
      await Otp.deleteOne({ _id: record._id });
      return res.status(400).json({ message: "OTP expired" });
    }

    const Model = role === "student" ? Student : Faculty;
    const existing = await Model.findOne({ email });
    if (existing) {
      await Otp.deleteOne({ _id: record._id });
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await Model.create({ email, passwordHash, role });

    await Otp.deleteOne({ _id: record._id });

    return res.status(201).json({ message: "Account created", id: user._id });
  } catch (err) {
    return res.status(500).json({ message: "Verify OTP failed", error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ message: "email, password, role are required" });
    }
    if (["student", "faculty"].includes(role) === false) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const Model = role === "student" ? Student : Faculty;
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: "Login failed", error: err.message });
  }
}
