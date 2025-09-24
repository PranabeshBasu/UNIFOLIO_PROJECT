import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["faculty"], default: "faculty", index: true },
  },
  { timestamps: true }
);

export const Faculty = mongoose.model("Faculty", facultySchema);
