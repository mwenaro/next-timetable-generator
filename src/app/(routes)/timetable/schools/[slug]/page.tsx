"use client";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
interface SchoolProps {
  params: { slug: string };
}

const School = ({ params: { slug } }: SchoolProps) => {

  const { isLoading, error, data } = useSWR(
    `/api/timetable/school/${slug}`,
    fetcher
  );
  if (!data?.data) {
    return <div>Loading...</div>;
  }
  const { data: school } = data;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{school.name}</h1>
      <p>Email: {school.email}</p>
      {/* Add other school details as needed */}
    </div>
  );
};

export default School;
