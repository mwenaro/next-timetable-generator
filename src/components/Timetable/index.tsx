import React from "react";
import SessionList from "./SessionList";
import DaySessions from "./DaySessions";

interface TimetableProps {
  //   timetable: {
  //     teacher: string;
  //     className: string;
  //     name: string;
  //   }[];
  tableData: any;
}

const Timetable: React.FC<TimetableProps> = ({ tableData }) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Timetable</h2>
      <div className="w-full flex flex-col  border-2 border-black">
        {tableData
          ? Object.entries(tableData).map(([day, periods], index) => (
              <DaySessions
                index={index}
                key={index}
                day={day}
                periods={periods}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Timetable;
