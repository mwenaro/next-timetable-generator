import React from "react";
import SessionList from "./SessionList";
interface Props {
  index: number;
  day: string;
  periods: any;
}
export default function DaySessions({ index, day, periods }: Props) {
  return (
    <div
      className={`w-full  flex border-black ${
        index === 0 ? "" : "border-t-2"
      }`}
    >
        {/* Day title */}
      <div
        className={`p-3 flex items-center justify-center text-lg font-bold w-[200px]
                  `}
      >
        <h3>{day}</h3>
      </div>
      {/* daily perids */}
      <div className={`flex-grow grid grid-cols-3 gap-2 `}>
        {/* cratew period columns */}
        {periods
          ? Object.entries(periods).map(([period, sessions], indx) => (
              <div key={indx} className={`border-l-2 border-black `}>
                <h5 className="text-center text-sm text-gray-600 py-2 border-b-2 border-black w-full">{period}</h5>

                <SessionList sessions={sessions as any} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
