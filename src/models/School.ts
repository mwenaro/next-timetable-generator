import mongoose, { Document } from "mongoose";

export interface ISchool extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schoolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, default: "123456" },
  },
  { timestamps: true }
);

export const School =
  mongoose.models.School || mongoose.model("School", schoolSchema);
