import React from 'react';

interface SessionProps {
  teacher: string;
  className: string;
  name: string;
}

const Session: React.FC<SessionProps> = ({ teacher, className, name }) => {
  return (
    <div className="p-2  text-black">
      <h3 className="text-lg md:text-2xl font-bold text-center uppercase">{name}</h3>
      {/* <p className="text-sm text-gray-600">Class: {className}</p> */}
      <h5 className="text-sm text-gray-600 text-right">Tr(s): {teacher}</h5>
    </div>
  );
};

export default Session;
