interface Dataprops {
  serviceList: {
    heading: string;
    seviceContent: {
      title: string;
      description: string;
      biodata: {
        name: string;
        address: string;
      };
    };
  };
}
const Services = (props: Dataprops) => {
  const { heading, seviceContent } = props.serviceList;
  const { title, description, biodata } = seviceContent;
  const { name, address } = biodata;
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center py-[70px]">
      <div className="w-[280px] sm:w-[500px] border-2 mx-auto py-5 px-3">
        <h2 className="text-center text-green-500 uppercase ">{heading}</h2>
        <div className="flex items-center gap-2 justify-center py-2">
          <h2 className="text-red-500">Title:</h2>
          <h2 className="text-white">{title}</h2>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center py-2">
          <h2 className="text-red-500">Description:</h2>
          <h2 className="text-white text-center">{description}</h2>
        </div>
        <div className="flex items-center gap-2 justify-center py-2">
          <h2 className="text-red-500">Writter:</h2>
          <h2 className="text-white">{name}</h2>
        </div>
        <div className="flex items-center gap-2 justify-center py-2">
          <h2 className="text-red-500">Address:</h2>
          <h2 className="text-white">{address}</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
