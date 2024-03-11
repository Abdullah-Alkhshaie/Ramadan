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
        height: "100vh",
      }}
      className="w-full flex items-center justify-center"
    >
      <div className="relative  border border-white  w-[90%] h-[90vh] ">
        <div className=" bg-black absolute opacity-50 w-full h-full"></div>
        <div className="absolute w-full h-full  text-white p-2 flex">
          <Ramadan />
          <div className="overflow-auto mana snap-mandatory  w-full h-[95.4%] flex-1">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
