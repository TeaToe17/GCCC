"use client";
import Hero from "@/components/Hero";
import { FC, useState } from "react";
import BelieversClass from "./BelieversClass";
import CultureClass from "./CultureClass";

const JoinUs: FC = () => {
  const [page, setPage] = useState<boolean>(true);
  const [activeState, setActiveState] = useState<boolean>(false);
  const [activeState1, setActiveState1] = useState<boolean>(true);

  const handleClick1 = () => {
    if (!page) {
      setPage(true);
      setActiveState(false);
      setActiveState1(true);
    }
  };
  const handleClick2 = () => {
    if (page) {
      setPage(false);
      setActiveState1(false);
      setActiveState(true);
    }
  };

  return (
    <div>
      <Hero />
      <div className="p-4 w-auto">
        <header className="flex w-full items-center justify-center">
          {activeState1 ? (
            <button
              onClick={handleClick1}
              className="bg-black py-3 px-8 rounded text-white text-sm font-Poppins"
            >
              BELIEVER'S CLASS
            </button>
          ) : (
            <button
              onClick={handleClick1}
              className="bg-[#F5F5F5] py-3 px-8 rounded text-sm font-Poppins"
            >
              BELIEVER'S CLASS
            </button>
          )}

          {activeState ? (
            <button
              onClick={handleClick2}
              className="bg-black py-3 px-8 rounded text-white text-sm font-Poppins"
            >
              CULTURE CLASS
            </button>
          ) : (
            <button
              onClick={handleClick2}
              className="bg-[#F5F5F5] py-3 px-8 rounded text-sm font-Poppins"
            >
              CULTURE CLASS
            </button>
          )}
        </header>
        {page ? <BelieversClass/> : <CultureClass/>}
      </div>
    </div>
  );
};

export default JoinUs;
