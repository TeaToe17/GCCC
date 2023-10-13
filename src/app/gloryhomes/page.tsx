"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import { GloryHome } from "@/constants";

const GloryHomes = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col p-2 w-full gap-[10px] justify-center items-center">
        <h1 className="md:text-3xl xl:w-full sm:w-ful text-center flex-wrap text-4xl font-semibold font-clash-display-bold">
          Glory Homes
        </h1>
        <p className="font-clash-display sm:w-[550px] md:w-[600px] lg:w-[600px] text-center text-[15px] ">
          Discover a spiritual haven near you with Glory Homes. Find a welcoming
          community of faith, friendship, and growth in your neighborhood
        </p>
        <div className="flex flex-wrap w-4/5 justify-evenly p-2 gap-[5px]  shadow rounded-xl">
          <div className="flex p-[8px] rounded-md text-300 justify-between bg-[#F6F6F6] w-8/12 ">
            <input type="search" placeholder="Search" className="bg-[#F6F6F6] outline-none w-3/4" />
            <span>
              <Image
                src="/search.svg"
                alt="search icon"
                width={20}
                
                height={20}
              />
            </span>
          </div>
          <select className="w-1/4 rounded-md p-2 bg-[#F6F6F6]">
            <option>Location</option>
            <option>Alagbole</option>
            <option>Akute</option>
            <option>Ifako</option>
            <option>Ikorodu</option>
            <option>Ojodu</option>
            <option>Ogba</option>
            <option>Magodo</option>
          </select>
        </div>
        <div className="flex flex-wrap p-10 items-center justify-center gap-[20px]">
          {GloryHome.map((homes) => (
            <div
              key={homes.id}
              className="flex flex-col gap-[10px] w-[300px] sm:w-[350px] md:w-[380px] lg:w-[380px] xl:w-[400px] rounded shadow p-[10px]"
            >
              <span className="text-poppins text-sm text-[#131316]">
                {homes.id}
              </span>
              <span className="md:text-3xl xl:w-full sm:w-ful flex-wrap text-2xl font-semibold font-clash-display-bold">
                {homes.location}
              </span>
              <p className="text-sm text-poppins text-200 text-[#131316] ">
                {homes.address}
              </p>
              <p className="flex text-sm items-center gap-[5px] text-poppins text-300 text-[#131316] ">
                {/* i had to use an svg cos the image with the name of phone is already in the public folder */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_922)">
                    <path
                      d="M14.6666 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.6079 13.3982 14.63 13.2133 14.6133C11.1619 14.3904 9.19131 13.6894 7.45998 12.5667C5.84919 11.5431 4.48353 10.1774 3.45998 8.56665C2.33329 6.82745 1.63214 4.84731 1.41331 2.78665C1.39665 2.60229 1.41856 2.41649 1.47764 2.24107C1.53673 2.06564 1.63169 1.90444 1.75649 1.76773C1.88128 1.63102 2.03318 1.52179 2.2025 1.447C2.37183 1.37221 2.55487 1.33349 2.73998 1.33332H4.73998C5.06351 1.33013 5.37717 1.4447 5.62248 1.65567C5.8678 1.86664 6.02803 2.15961 6.07331 2.47998C6.15772 3.12003 6.31428 3.74847 6.53998 4.35332C6.62967 4.59193 6.64908 4.85126 6.59591 5.10057C6.54274 5.34988 6.41922 5.57872 6.23998 5.75998L5.39331 6.60665C6.34235 8.27568 7.72428 9.65761 9.39331 10.6067L10.24 9.75998C10.4212 9.58074 10.6501 9.45722 10.8994 9.40405C11.1487 9.35088 11.408 9.37029 11.6466 9.45998C12.2515 9.68568 12.8799 9.84224 13.52 9.92665C13.8438 9.97234 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6666 11.28Z"
                      stroke="#131316"
                      stroke-opacity="0.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_922">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {homes.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GloryHomes;
