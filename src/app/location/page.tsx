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
          <h2 className="font-bold text-3xl max-sm:text-2xl">
            Come Fellowship with us
          </h2>
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
                Join our Next Service at Ojodu Berger
              </h3>
              <p className="text-slate-500  text-[#131316CC] max-sm:text-[18px]">
                Community of believers dedicated to spreading the love of Christ
                and making.
              </p>
              <div className="flex flex-col items-start justify-center px-5 py-2 gap-5">
                <div className="flex flex-col ">
                  <span className="text-slate-600 max-sm:text-[16px] flex gap-2">
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
                    Wednesdays | 4 PM
                  </span>
                  <span className="text-slate-600 max-sm:text-[16px] flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      className="opacity-0"
                    >
                      <path
                        d="M12.2292 21.5965C6.55352 13.3684 5.5 12.5239 5.5 9.5C5.5 5.35785 8.85785 2 13 2C17.1421 2 20.5 5.35785 20.5 9.5C20.5 12.5239 19.4465 13.3684 13.7708 21.5965C13.3983 22.1345 12.6016 22.1345 12.2292 21.5965ZM13 12.625C14.7259 12.625 16.125 11.2259 16.125 9.5C16.125 7.7741 14.7259 6.375 13 6.375C11.2741 6.375 9.875 7.7741 9.875 9.5C9.875 11.2259 11.2741 12.625 13 12.625Z"
                        fill="#9BA5B0"
                      />
                    </svg>{" "}
                    Sundays | 9 AM
                  </span>
                </div>
                <div className="flex">
                  <span className="text-slate-600 max-sm:text-[16px] flex gap-2">
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
