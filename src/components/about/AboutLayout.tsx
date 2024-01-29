import StudentData from "./StudentData";

const about = () => {
  const AdmissionDetail = {
    name: "Sanjay",
    present: false,
    rollnumber: 179,
  };

  return (
    <>
      <StudentData AdmissionData={AdmissionDetail} />
    </>
  );
};

export default about;
