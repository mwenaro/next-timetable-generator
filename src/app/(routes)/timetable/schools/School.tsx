import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

interface SchoolProps {
  schoolId: string;
}

const School = ({ schoolId }: SchoolProps) => {
  
  const { isLoading, error, data } = useSWR(`/api/timetable/school/${schoolId}`, fetcher);
  const { data: school } = data;
  if (!school) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{school.name}</h1>
      <p>Email: {school.email}</p>
      {/* Add other school details as needed */}
    </div>
  );
};

export default School;
