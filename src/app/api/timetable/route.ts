import { teacherService } from "@/contollers/TeacherService";
import { NextRequest, NextResponse } from "next/server";
import { dummydata2 } from "./data";
import { courseService } from "@/contollers/CourseService";
import { generateTimetable } from "./dataGen";
import { dbCon } from "@/libs/mongoose/dbCon";

export async function GET(req: NextRequest) {
  try {
    await dbCon()
    const data = await courseService.getAll();
    const timetableData = generateTimetable(data as any);
    console.log({ data });
    return NextResponse.json({ data: timetableData, sucess: true });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = await teacherService.create(body);
    return NextResponse.json({ data, sucess: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
