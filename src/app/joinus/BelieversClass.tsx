import React, { FC } from "react";
import Image from "next/image";

const BelieversClass: FC = () => {
  return (
    <div className="flex flex-wrap flex-col gap-[15px] p-4 md:p-10 lg:p-10 sm:gap-[45px] md:gap-[60px] lg:gap-[60px] justify-center items-center ">
      <div className="flex justify-evenly gap-[10px] flex-wrap items-center">
        <div className="flex flex-col gap-[15px] sm:p-6 md:p-20 lg:p-20 w-11/12 sm:w-[450px] md:w-[550px] lg:w-[550px]">
          <h1 className="md:text-3xl xl:w-full sm:w-ful flex-wrap text-4xl font-semibold font-clash-display-bold">
            Join our Believers Class
          </h1>
          <p className="font-clash-display flex-wrap text-[15px] ">
            The Believers Class is the starting and basic training classes
            required to be recognized as a member of the Glory Centre Community
            Church and the Glory Team.
          </p>
          <span className="text-[#555] p-2 w-[290px] shrink flex bg-[#E4E4E433] font-poppins-300 ">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.13281 11.7832H9.13281V13.7832H7.13281V11.7832ZM21.1328 6.7832V20.7832C21.1328 21.8832 20.2328 22.7832 19.1328 22.7832H5.13281C4.02281 22.7832 3.13281 21.8832 3.13281 20.7832L3.14281 6.7832C3.14281 5.6832 4.02281 4.7832 5.13281 4.7832H6.13281V2.7832H8.13281V4.7832H16.1328V2.7832H18.1328V4.7832H19.1328C20.2328 4.7832 21.1328 5.6832 21.1328 6.7832ZM5.13281 8.7832H19.1328V6.7832H5.13281V8.7832ZM19.1328 20.7832V10.7832H5.13281V20.7832H19.1328ZM15.1328 13.7832H17.1328V11.7832H15.1328V13.7832ZM11.1328 13.7832H13.1328V11.7832H11.1328V13.7832Z"
                fill="#555555"
              />
            </svg>
            Next Start Date: 17th May, 2023
          </span>
          <button className="bg-[#EC3237] py-3 px-8 text-white w-[180px] rounded text-base font-Poppins">
            Register Here
          </button>
        </div>
        <Image src="/bible.png" alt="bible" width={451} height={392} />
      </div>
      <div className="flex justify-evenly shrink gap-[20px] sm:gap-[70px] md:gap-[70px] lg:gap-[70px] flex-wrap items-center">
        <h1 className="md:text-2xl sm:w-[360px] md:w-[360px] lg:w-[360px] flex-wrap text-2xl font-semibold font-clash-display-bold">
          Baptism is an outward declaration of the decision you have made to
          surrender your heart to Jesus.
        </h1>
        <p className="font-clash-display sm:w-[400px] md:w-[400px] lg:w-[400px] flex-wrap text-[15px] ">
          If you have recently decided to follow Jesus or if you’ve never been
          water baptized, we invite you to take this next step in your faith
          journey. It is a significant moment that will serve as a reminder that
          the past is gone, that God has saved you and that He will be faithful
          to continue what He started in your life.
        </p>
      </div>
      <div className="flex flex-col rounded-t-lg shrink rounded-r border w-11/12 sm:w-[500px] md:w-[600px] lg:w-[600px] h-[350px]">

        <div className="flex w-full rounded-t-lg relative mt-0 bg-[#0097D9] h-[16px]"></div>
      <div className="flex h-[350px] sm:w-[600px] md:w-[600px] lg:w-[600px] lg:h-[650px] justify-center items-center">
  <div className="flex absolute">Google Registration Form Here</div>
      </div>
      </div>
    </div>
  );
};

export default BelieversClass;
