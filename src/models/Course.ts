import mongoose, { Document, Schema } from 'mongoose';
import { IClass, Class } from './Class';
import { ISchool, School } from './School';
import { ITeacher, Teacher } from './Teacher';


export interface ICourse extends Document {
  name: string;
  class: string | IClass;   // Changed 'clas' to 'class'
  school: string | ISchool;
  teachers: (string | ITeacher)[];
  createdAt?: Date;
  updatedAt?: Date;
}

const courseSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  class: {  // Fixed the field name to 'class'
    type: Schema.Types.ObjectId,
    ref: 'Class',  // Changed 'Clas' to 'Class'
    required: true
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
    required: true
  },
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  }]
}, { timestamps: true });

// Export the Course model
export const Course = mongoose.models.Course || mongoose.model<ICourse>('Course', courseSchema);
