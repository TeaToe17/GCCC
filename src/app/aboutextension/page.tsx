"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navlinks } from "@/constants";

const AboutExtension = () => {
  return (
    <div>
      <div className="flexBetween w-full h-full mb-16 font-clash-display text-black lg:ml-[153px] ">
        <Link href="/">
          <div className="flex gap-1">
            <Image src="/logo.svg" width={40} height={30} alt="logo" />
            <h6 className="text-xs w-32 uppercase font-Poppins leading-3">
              Glory realms ministries
            </h6>
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="xl:flex hidden text-small gap-7 uppercase font-clash-display-medium">
            {Navlinks.map((links) => (
              <Link key={links.key} href={links.href}>
                {links.text}
              </Link>
            ))}
          </ul>
          <button className="bg-lightblue py-2 px-6 rounded-lg text-white hover:animate-enlarge">
            Give
          </button>
        </div>
      </div>
      <Link href="about" >
        <div className=" flex items-center font-bold text-red-700 text-left cursor-pointer lg:ml-[153px] ">
          <img src="arrow-right.png" alt=""  className="h-[16px] m-[2px] " />
          Back
        </div>
      </Link>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:m-[50px] ">
        <img
          src="Rectangle 10.png"
          alt="img"
          className=" h-[550px] w-[330px] lg:w-[403px] lg:h-[756px] p-[5px] lg:basis-[30%] "
        />
        <div className="lg:basis-[36%]">
          <p className="font-bold text-center">Olakunle Zakariya</p>
          <p className="text-[14px] text-center ">Senior Pastor</p>
          <p className="text-left m-[20px] font-semibold ">
            Zakariya Olakunle Taofik, fondly known as Pzak, is a dynamic
            preacher and teacher of the gospel of the Kingdom. You will not have
            to meet him a second time to notice his passion for revival and his
            commitment to making God real on the face of the earth.
            <br />
            <br />
            He is an exceptionally gifted teacher of the word. Fully given to
            the work of the Lord and as the Spirit leads, he teaches, preaches,
            prophesies, heals, works miracles – whatever the Lord wants to do –
            for the manifestation of His Glory and the equipping of the saints.
            <br />
            <br />
            Pzak mentors many, both young and old. He is one of the most
            friendly and fun-to-be-with-pastors you will ever meet the peculiar
            anointing for encouraging and empowering people to live for God. He
            has ministered and continues to minister in several campuses and
            conferences around the country.
            <br />
            <br />
            He is currently the president of the Glory Realms Ministries and the
            Senior Pastor of the Glory Centre Community Church – a growing
            community of believers that has been enforcing the will of God and
            kingdom culture in the city and its environ.
            <br />
            <br />
            He is married to the love of his youth, the beautiful and graceful
            Adesola Zakariya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutExtension;
