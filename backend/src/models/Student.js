import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["student"], default: "student", index: true },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
