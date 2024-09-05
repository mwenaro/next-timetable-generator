import { ICourse } from "@/models/Course";
import React from "react";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import { IClass } from "@/models/Class";
import { ISchool } from "@/models/School";
import { ITeacher } from "@/models/Teacher";
import { Button } from "@/components/ui/button";

export default function CourseCard({
  course,
  setSelectedCourse,
}: {
  course: ICourse;
  setSelectedCourse: any;
}) {
  // const course = JSON.parse(courseStr)
  const {name, teachers, class:cls} = course
  return (
    <div className="p-4 border rounded-lg shadow-md min-size-48 flex flex-col justify-between bg-slate-400">
      <h3 className="text-xl font-medium text-black uppercase">
        {course.name}
      </h3>
      <p className="text-gray-600 capitalize">
        Class: {(cls as IClass)?.name as string}
      </p>
      {/* <p className="text-gray-600">
        School: {(course?.school as ISchool)?.name}
      </p> */}
      <p className="text-gray-600 text-sm">
        Teacher{teachers.length>1? 's' : ''}:{" "}
        <span className="capitalize text-black">
          {(teachers as ITeacher[])
            .map((teacher) => teacher?.name)
            .join(", ")}
        </span>
      </p>
      <div className="flex justify-between w-full mt-2">
        {/* <UpdateButton selectedCourse={JSON.stringify(course)} path={"/course"} /> */}
        <Button
          className="bg-orange-600 w-2/5"
          size={"lg"}
          onClick={() => setSelectedCourse(course)}
        >
          Edit
        </Button>
        <DeleteButton
          className="w-2/5"
          idStr={JSON.stringify(course._id)}
          path={"/course"}
        />
      </div>
    </div>
  );
}
