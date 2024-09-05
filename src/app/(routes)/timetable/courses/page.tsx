"use client";
import { useEffect, useState } from "react";
import AddCourse from "./AddCourse";
import CoursesList from "./CouseList";
import { Modal } from "@/components/Modal"; // Import the new Modal component
import { ISchool } from "@/models/School";
import { IClass } from "@/models/Class";
import { ITeacher } from "@/models/Teacher";
import { ICourse } from "@/models/Course";
import { Button } from "@/components/ui/button";

const CoursesPage: React.FC = () => {
  const [schools, setSchools] = useState<ISchool[]>([]);
  const [classes, setClasses] = useState<IClass[]>([]);
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setCourse = (course: ICourse | null) => {
    setSelectedCourse(null);
    setSelectedCourse(course);
    setIsModalOpen(true); // Open the modal when a course is selected
  };

  useEffect(() => {
    console.log(selectedCourse);
  }, [selectedCourse]);

  useEffect(() => {
    const fetchData = async () => {
      const [
        schoolResponse,
        classesResponse,
        teachersResponse,
        coursesResponse,
      ] = await Promise.all([
        fetch("/api/timetable/school"),
        fetch("/api/timetable/class"),
        fetch("/api/timetable/teacher"),
        fetch("/api/timetable/course"),
      ]);

      const [school, classes, teachers, courses] = await Promise.all([
        schoolResponse.json(),
        classesResponse.json(),
        teachersResponse.json(),
        coursesResponse.json(),
      ]);

      setSchools(school.data);
      setClasses(classes.data);
      setTeachers(teachers.data);
      setCourses(courses.data);
    };

    fetchData();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div
      className="w-full container mx-auto p-4 bg-slate-200"
      style={{ color: "gray" }}
    >
      <Button className="mr-auto" onClick={() => setIsModalOpen(!isModalOpen)}>
        Add Course
      </Button>
      <CoursesList courses={courses} setSeletedCourse={setCourse} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddCourse
          teachers={teachers}
          classes={classes}
          schools={schools}
          selectedCourse={selectedCourse}
        />
      </Modal>
    </div>
  );
};

export default CoursesPage;
