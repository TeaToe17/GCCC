import Hero from "@/components/Hero";
import Image from "next/image";
const Events = () => {
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
                className="flex gap-5 max-w-[820px] items-center justify-center max-sm:flex-wrap"
                key={index}
              >
                <div>
                  <Image
                    src={info.src}
                    alt="hyms"
                    width={300}
                    height={130}
                    className="w-[350px] h-[220px] shrink-0 rounded-lg "
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
                    <span className="text-[#131316CC] text-sm font-normal flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M7.63281 11.2832H9.63281V13.2832H7.63281V11.2832ZM21.6328 6.2832V20.2832C21.6328 21.3832 20.7328 22.2832 19.6328 22.2832H5.63281C4.52281 22.2832 3.63281 21.3832 3.63281 20.2832L3.64281 6.2832C3.64281 5.1832 4.52281 4.2832 5.63281 4.2832H6.63281V2.2832H8.63281V4.2832H16.6328V2.2832H18.6328V4.2832H19.6328C20.7328 4.2832 21.6328 5.1832 21.6328 6.2832ZM5.63281 8.2832H19.6328V6.2832H5.63281V8.2832ZM19.6328 20.2832V10.2832H5.63281V20.2832H19.6328ZM15.6328 13.2832H17.6328V11.2832H15.6328V13.2832ZM11.6328 13.2832H13.6328V11.2832H11.6328V13.2832Z"
                          fill="#9BA5B0"
                        />
                      </svg>{" "}
                      {info.time}
                    </span>
                    <span className="text-[#131316CC] text-sm font-normal flex gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M12.2292 21.5965C6.55352 13.3684 5.5 12.5239 5.5 9.5C5.5 5.35785 8.85785 2 13 2C17.1421 2 20.5 5.35785 20.5 9.5C20.5 12.5239 19.4465 13.3684 13.7708 21.5965C13.3983 22.1345 12.6016 22.1345 12.2292 21.5965ZM13 12.625C14.7259 12.625 16.125 11.2259 16.125 9.5C16.125 7.7741 14.7259 6.375 13 6.375C11.2741 6.375 9.875 7.7741 9.875 9.5C9.875 11.2259 11.2741 12.625 13 12.625Z"
                          fill="#9BA5B0"
                        />
                      </svg>{" "}
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
