import Table from "./Table";
import Ramadan from "./Ramadan";
import banner from "../assets/12978520_5110786.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        width: "100%",
      }}
      className="w-full flex  items-center justify-center h-[140vh] lg:h-[100vh]"
    >
      <div className="relative  border border-white w-full h-full  lg:w-[90%] lg:h-[90vh] ">
        <div className=" bg-black absolute opacity-50 w-full h-full"></div>
        <div className="absolute w-full h-full  text-white p-2 flex flex-col lg:flex-row ">
          <div className="flex-1 border-b lg:border-none">
            <Ramadan />
          </div>
          <div className="lg:overflow-auto   w-full lg:h-[95.4%] flex-1">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
