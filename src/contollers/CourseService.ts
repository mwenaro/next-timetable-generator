import { Course, ICourse } from "@/models/Course";
import { Controller } from "./Controller";
import { Class } from "@/models/Class";
import { Teacher } from "@/models/Teacher";
import { School } from "@/models/School";
import { dbCon } from "@/libs/mongoose/dbCon";

export class CourseService extends Controller<ICourse> {
  constructor() {
    super(Course);
  }

  async getAll(): Promise<ICourse[]> {
    await dbCon();
    new School();
    new Class();
    new Teacher();
    return Course.find({})
      .sort({ name: 1 })
      .populate("class")
      .populate("teachers")
      .populate("school");
  }
}

export const courseService = new CourseService();
