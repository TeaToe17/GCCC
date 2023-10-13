import React, { FC } from "react";
import Image from "next/image";

const EventCard: FC = () => {
  return (
    <div className="flex flex-col p-3 lg:shrink-0 md:shrink-0 sm:shrink-0 shrink-0 gap-[12px] bg-white rounded-md relative">
      <Image
        src="/EventCardImage.png"
        alt="EventCard Image"
        className="object-cover"
        width={341}
        height={300}
      />
      <span className="font-poppins-400">MAY 21,2023</span>
      <span className="font-clash-display-bold text-2xl">
        Atmosphere of Worship
      </span>
      <span className="font-poppins-300 text-[#72879F]">
        Ojodu Berger, Lagos
      </span>
      <div className="flex text-[#72879F] font-bold items-center justify-center rounded border-2 border-[#72879F] px-10 py-2 w-full">
        + Add to calendar
      </div>
    </div>
  );
};

export default EventCard;
