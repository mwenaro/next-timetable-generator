import React from "react";
import SessionList from "./SessionList";

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
          ? Object.entries(tableData).map(([k, periods], index) => (
              <div className={"w-full flex border-black border-1"} key={index}>
                {/* col 1 */}
                <div
                  className={`p-3 flex items-center justify-center text-lg font-bold border-2 border-b-0 border-l-0  border-black w-[100px] ${
                    index === 0 ? "border-t-0" : ""
                  }`}
                >
                  <h3>{k}</h3>
                </div>
                <div className="flex-grow grid grid-cols-3 gap-2">
                  {/* cratew period columns */}
                  {periods
                    ? Object.entries(periods).map(
                        ([period, sessions], indx) => (
                          <div key={indx}>
                            <h5>{period}</h5>

                            <SessionList sessions={sessions as any} />
                          </div>
                        )
                      )
                    : ""}
                </div>
              </div>
            ))
          : null}
      </div>
      {/* <SessionList sessions={timetable} /> */}
    </div>
  );
};

export default Timetable;
