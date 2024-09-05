import mongoose, { Document, Schema } from 'mongoose';
import { ISchool } from './School';

export interface IClass extends Document {
  name: string;
  school: ISchool['_id'] | ISchool;
  createdAt?: Date;
  updatedAt?: Date;
}

const classSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School', // Make sure this matches the exact name in your School model
    required: true
  }
}, { timestamps: true });

// Fix the model name to 'Class'
export const Class = mongoose.models.Class || mongoose.model<IClass>('Class', classSchema);
