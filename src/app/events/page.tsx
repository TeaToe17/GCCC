import Hero from "@/components/Hero";
import Image from "next/image";
const Events = () => {
  return (
    <div>
      <Hero />
      <div className="flex items-center justify-center w-full flex-col  px-40 py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-black ">
            Our Upcoming Events
          </h1>
          <span className="text-[#131316CC] font-sm font-normal ">
            Join us for any of our upcoming events in any location
          </span>
        </div>
        <div className="flex items-end w-full justify-end">
          <select className="w-52 h-5 border-solid rounded-md border-2 border-[#a2a2a5cc] p-5 text-black">  
            select a location
            <option value="default">Select a location</option>
            <option>Select a city...</option>
            <option>Select a city...</option>
          </select>
        </div>
        <div>
          <div className="flex gap-5">
            <div>
              <Image src="/eventsimg.png" alt="hyms" width={300} height={100} />
            </div>
            <div className="flex  items-start  flex-col justify-start">
              <div className="flex flex-col gap-3 m-3">
                <h3 className="font-bold text=-5xl text-black">
                  Psalms Hymns & Spiritual Song
                </h3>
                <span className="text-[#131316CC] font-sm font-normal ">
                  It is in Gods presence we experience the most joy and the
                  highest pleasure. PHSS is in a few weeks, are you ready to
                  experience the joy of The Lord?{" "}
                </span>
              </div>
              <div className="flex flex-col gap-3 mx-7">
                <span className="text-[#131316CC] font-sm font-normal ">
                  Saturday May 21, 2023 | 12:30 PM
                </span>
                <span className="text-[#131316CC] font-sm font-normal ">
                  12 Efon Alaye Street, Off Sule Abore, Lagos. Nigeria.
                </span>
              </div>
              <button className="mt-3  border-solid rounded-md border-2 border-[#a2a2a5cc] p-2 h-7 flex items-center justify-center">
                + Add to calender
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
