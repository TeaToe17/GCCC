import Hero from "@/components/Hero";
import Image from "next/image";

const Locations = () => {
  const diffrentLocations = [
    {
      text: "Ojodu Berger Lagos",
    },
    {
      text: "IGANDO, LAGOS",
    },
    {
      text: " ABEOKUTA",
    },
    {
      text: "IBADAN",
    },
    {
      text: "UK",
    },
    {
      text: "CANADA",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="flex items-center justify-center flex-col p-28 py-10 max-sm:p-0">
        <div className="flex  justify-center flex-col items-center w-full gap-4">
          <h2 className="font-bold text-3xl max-sm:text-2xl">Come Fellowship with us</h2>
          <span className="font-normal text-xl text-[#131316CC] max-sm:text-[18px ]">
            Community of believers dedicated to spreading the love of Christ and
            making.
          </span>
        </div>
        <div className="flex items-center justify-center gap-9 max-sm:flex-wrap">
          <div>
            {diffrentLocations.map((info, index) => (
              <div
                key={index}
                className=" flex flex-col w-52 text-sm bg-[#F5F5F5] text-black h-6 m-3 rounded-md py-6 px-4 text-center justify-center  items-center hover:bg-black hover:text-white transition duration-500"
              >
                <span>{info.text}</span>
              </div>
            ))}
          </div>
          <div className="flex max-w-5xl gap-9 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
            <div className="flex gap-0 max-sm:items-center max-sm:justify-center">
              <div
                className="bg-cover bg-no-repeat w-[250px] h-[350px] bg-center max-sm:w-[150px]"
                style={{
                  backgroundImage: "url('/locationimg1.png')",
                }}
              ></div>
              <div
                className="bg-cover bg-no-repeat w-[250px] h-[350px] bg-center max-sm:w-[150px]  "
                style={{
                  backgroundImage: "url('/locationimg2.png')",
                }}
              ></div>
            </div>
            <div className="flex-col flex gap-5">
              <h3 className="text-3xl font-bold max-sm:text-2xl  max-sm:max-w-[90%]">
                Join Next Service at Ojodu Berger
              </h3>
              <p className="text-slate-500  text-[#131316CC] max-sm:text-[18px]">
                Community of believers dedicated to spreading the love of Christ
                and making.
              </p>
              <div className="flex flex-col items-start justify-center px-5 py-2 gap-5">
                <div className="flex flex-col ">
                  <span className="text-slate-600 max-sm:text-[16px]">Wednesdays | 4 PM</span>
                  <span className="text-slate-600 max-sm:text-[16px]">Sundays | 9 AM</span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 max-sm:text-[16px]">
                    12 Efon Alaye Street, Off Sule Abore, Lagos, Nigeria
                  </span>
                </div>
                <div className="flex gap-5">
                  <button className="bg-[#EC3237] h-12 text-white rounded w-36 hover:scale-110 duration-700 transition">
                    Contact Us
                  </button>
                  <button className="border-red-600 border-2 border-solid text-red-600 rounded w-36 h-12 hover:scale-110 duration-700 transition">
                    Locate Venue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
