import { ISchool } from '@/models/School';
import React, { useEffect, useState } from 'react';

interface SchoolListProps {
  schools: ISchool[];
}

const SchoolList = ({ schools }: SchoolListProps) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">School List</h1>
      <ul>
        {schools.map((school) => (
          <li key={school._id as string}>
            <a href={`/timetable/schools/${school._id}`} className="text-blue-500 hover:underline">
              {school.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;