import Services from "@/components/services/Services";

const page = () => {
  const serviceList = {
    heading: "Service",
    seviceContent: {
      title: "Thought of the day",
      description:
        "अगर ख्वाईश कुछ अलग करने की है तो दिल और दिमाग के बीच बगावत लाजमी है",
        biodata: {
            name: "Sanjay",
            address:"Mandi Adampur"
            
      },
    },
  };
  return (
    <div>
      <Services serviceList={serviceList} />
    </div>
  );
};

export default page;
