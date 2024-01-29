import React from "react";
import { Interface } from "readline";
interface Dataprops {
  AdmissionData: {
    name: string;
    present: boolean;
    rollnumber: number;
  };
}
const StudentData = (props: Dataprops) => {
  const { name, present, rollnumber } = props.AdmissionData;
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center py-[70px]">
      <div className={`w-[280px] sm:w-[500px] border-2 mx-auto py-5 ${present ? "border-green-600":"border-red-600" }`}>
        <div className="flex items-center gap-2 justify-center py-2">
          <h2 className="text-white">Name:</h2>
          <h2 className="text-white">{name}</h2>
        </div>
        <div className="flex items-center gap-2 justify-center py-2">
          <h2 className="text-white">Present:</h2>
          <h2 className={`${present ? "text-green-600" : "text-red-600"}`}>
            {present ? "Present" : "Absent"}
          </h2>
        </div>
        <div className="flex items-center gap-2 justify-center py-2">
          <h2 className="text-white">Roll number:</h2>
          <h2 className="text-white">{rollnumber}</h2>
        </div>
      </div>
    </div>
  );
};

export default StudentData;
