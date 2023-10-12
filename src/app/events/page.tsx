import Hero from "@/components/Hero";
import Image from "next/image";
const Events = () => {
  interface UpcominEvents {
    id: number;
    title: string;
    about: string;
    time: string;
    location: string;
    src: string;
  }

  const upcomingEvents = [
    {
      title: " Psalms Hymns & Spiritual Song",
      about:
        " It is in Gods presence we experience the most joy and the highest pleasure. PHSS is in a few weeks, are you ready to experience the joy of The Lord? ",
      time: " Saturday May 21, 2023 | 12:30 PM",
      location: " 12 Efon Alaye Street, Off Sule Abore, Lagos. Nigeria.",
      src: "/eventsimg.png",
    },
    {
      title: " Psalms Hymns & Spiritual Song",
      about:
        " It is in Gods presence we experience the most joy and the highest pleasure. PHSS is in a few weeks, are you ready to experience the joy of The Lord? ",
      time: " Saturday May 21, 2023 | 12:30 PM",
      location: " 12 Efon Alaye Street, Off Sule Abore, Lagos. Nigeria.",
      src: "/eventsimg.png",
    },
    {
      title: " Psalms Hymns & Spiritual Song",
      about:
        " It is in Gods presence we experience the most joy and the highest pleasure. PHSS is in a few weeks, are you ready to experience the joy of The Lord? ",
      time: " Saturday May 21, 2023 | 12:30 PM",
      location: " 12 Efon Alaye Street, Off Sule Abore, Lagos. Nigeria.",
      src: "/eventsimg.png",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="flex items-center justify-center w-full flex-col  px-3 py-10 gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-black ">
            Our Upcoming Events
          </h1>
          <span className="text-[#131316CC] font-sm font-normal ">
            Join us for any of our upcoming events in any location
          </span>
        </div>
        <div className="flex items-end w-full justify-end">
          <select className="w-52 h-9 border-solid rounded-md border-2 border-[#a2a2a5cc] text-black">
            <option value="default">Select a location</option>
            <option>Select a city...</option>
            <option>Select a city...</option>
          </select>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            {upcomingEvents.map((info, index) => (
              <div
                className="flex gap-5 max-w-[820px] items-center justify-center"
                key={index}
              >
                <div>
                  <Image
                    src={info.src}
                    alt="hyms"
                    width={300}
                    height={130}
                    className="w-[350px] h-[220px]"
                  />
                </div>
                <div className="flex  items-start  flex-col justify-start gap-3">
                  <div className="flex flex-col gap-3 m-2">
                    <h3 className="font-semibold text=-5xl text-black">
                      {info.title}
                    </h3>
                    <span className="text-[#131316CC] font-sm font-normal text-sm ">
                      {info.about}{" "}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 mx-7">
                    <span className="text-[#131316CC] text-sm font-normal ">
                      {info.time}
                    </span>
                    <span className="text-[#131316CC] text-sm font-normal ">
                      {info.location}
                    </span>
                  </div>
                  <button className="mt-3  border-solid rounded-sm border-2 border-[#a2a2a5cc] p-3 h-9 flex items-center justify-center text-[#72879F] hover:scale-110 duration-700 transition">
                    + Add to calender{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
