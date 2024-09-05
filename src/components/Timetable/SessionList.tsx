import React from "react";
import Session from "./Session";
import { cn } from "@/lib/utils";

// interface SessionListProps {
//   sessions: {
//     teacher: string;
//     className: string;
//     name: string;
//   }[];
// }
interface SessionListProps {
  sessions: { name: string; className: string; teachers: any[] }[];
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => {
  let forms = {
    form1: null,
    form2: null,
    form3: null,
    form4: null,
  };

  for (const form in forms) {
    const sn = sessions.find((sn) => sn.className == form);
    forms = { ...forms, [form]: sn };
  }
  return (
    <div className="w-full ">
      {Object.values(forms).map((session: any, index) => (
        <div className={cn(`border-t-2 border-black w-full h-16  bg-slate-100`,`${index == 0? 'border-t-0':''}`) }>
          {session ? (
            <Session
              key={index}
              teacher={session?.teachers.map((tr: any) => tr.code).join("/")}
              className={session?.className}
              name={session?.name}
            />
          ) : (
            <div key={index} className="flex items-center justify-center">
              x
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SessionList;
