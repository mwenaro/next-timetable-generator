'use client'
import React from "react";
import SchoolList from "./SchoolList";
import useSWR from "swr";

export default function SchoolsPage() {
  const fetcher = async (url: string) => {
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      throw error;
    }
  };
  const { isLoading, error, data } = useSWR("/api/timetable/school", fetcher);
  if (isLoading) return <h2>Loading .....</h2>;
  if (!isLoading && !data?.data) return <h2>No Data Found</h2>;


  return <SchoolList schools={data.data} />;
}
