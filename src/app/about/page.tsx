"use client";
import React, { useState } from "react";
import Link from "next/link";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import AboutExtension from "../aboutextension/page";

import Profile from "@/components/Profile";

import Rectangle from "@/../../public/Rectangle 9.png";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Hero />
      <h1 className="text-center text-[40px] h-[120px] font-bold leading-tight">
        {" "}
        Disciples Of <br /> Every Nation In Him{" "}
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center m-[10px] relative w-[396px] lg:w-[416px] ">
          <div className=" top-[30px] left-[3px] lg:left-[-35px] absolute ">
            {" "}
            <img
              src="Rectangle 1.png"
              alt="img"
              className="rounded-lg w-[78px] h-[78px] "
            />{" "}
          </div>
          <div className="flex-col">
            <img
              src="Rectangle 3.png"
              alt="img"
              className="rounded-lg w-[70px] h-[50px] top-[5px] left-[85px] lg:top-[0px] lg:left-[67px] absolute  "
            />
            <img
              src="Rectangle 4.png"
              alt="img"
              className="rounded-lg w-[70px] h-[80px] top-[60px] left-[85px] lg:left-[67px] lg:top-[70px] absolute  "
            />
          </div>
          <div className="h-[150px] ">
            {" "}
            <img
              src="Rectangle 7.png"
              alt="img"
              className="w-[78px] h-[165px] rounded-lg bottom-[-10px] left-[158px] absolute  lg:w-[100px] lg:h-[170px] lg:gap-[40px] "
            />{" "}
          </div>
          <div className="flex-col">
            <img
              src="Rectangle 5.png"
              alt="img"
              className="rounded-lg w-[70px] h-[80px] top-[5px] right-[85px] lg:top-[0] lg:right-[68px] absolute  "
            />
            <img
              src="Rectangle 6.png"
              alt="img"
              className="rounded-lg w-[70px] h-[50px] top-[90px] right-[85px] lg:right-[68px] lg:top-[97px] absolute  "
            />
          </div>
          <div>
            <img
              src="Rectangle 2 .png"
              alt="img"
              className="rounded-lg w-[80px] h-[80px] top-[30px] right-[0px] lg:right-[-35px] absolute  "
            />
          </div>
        </div>
      </div>
      <p className="text-center ml-[15px] mr-[15px] mt-[20px] lg:mr-[400px] lg:ml-[400px] font-semibold ">
        We believe that God has a timely message for you in every service. Open
        your heart, listen, and be ready to receive and be encouraged as you
        engage
        <br />
        <br />
        We believe that God has a timely message for you in every service. Open
        your heart, listen, and be ready We believe that God has a timely
        message for you in every service. Open your heart, listen, and be ready
        to receive and be encouraged as you engage
        <br />
        <br />
        We believe that God has a timely message for you in every service. Open
        your heart, listen, and be ready to receive and be encouraged as you
        engage
        <br />
        <br />
        We believe that God has a timely message for you in every service. Open
        your heart, listen, and be ready to receive and be encouraged as you
        engage to receive and be encouraged as you engage
        <br />
        <br />
        We believe that God has a timely message for you in every service. Open
        your heart, listen, and be ready to receive and be encouraged as you
        engage
        <br />
        <br />
      </p>
      <div className="flex flex-col justify-center items-center ">
        <p className="font-bold mb-[10px] ">Meet Our Ministry Leaders</p>
        <p className="mb-[10px] text-center">
          This is the apostolic team that provides spiritual and organizational
          oversight for <br /> everything that happens at Glory Center Community
          Church
        </p>
        <div>
          <Link href="aboutextension" >
            <img
              src="Rectangle 8.png"
              alt="img"
              className="mb-[10px]"
              // onClick={}
            />
            kkk
          </Link>

          <p className="font-bold">Olakunle Zakariya</p>
          <p className="mb-[10px]">Senior Pastor</p>
        </div>
      </div>

      <div className="grid grid-cols-4">
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
        <Profile
          image={Rectangle}
          name="Pastor's Name"
          branchName=" Branch Name (Igando)"
        />
      </div>
    </div>
  );
};

export default About;
