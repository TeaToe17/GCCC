"use client"
import {useCallback} from "react"
import React from 'react'
import Header from './Header'
import {categoryLinks}  from '@/constants'
import {useState} from "react"
import Link from 'next/link'
import {DropDown} from "./DropDown"


const Hero = () => {
  const [dropDown, setDropDown] = useState(false)
  const handleDropDown = useCallback(() => {
    setDropDown(prevdropDown => !prevdropDown)
  }, [])
  return (
    <>
    {dropDown &&  
   <DropDown onClose={handleDropDown}/>
    }
    <div className={`paddings font-clash-display bg-[url('/hero-img.png')] text-white bg-cover bg-no-repeat sm:min-w-[100vw] relative `}>
      {!dropDown && 
    <div className="h-full">
     <Header onOpen={handleDropDown}/>
    </div>
      }
      <div className="flex flex-col gap-4 text-white h-full mt-32">
        <span>Welcome to GCCC</span>
        <span className="md:text-5xl xl:w-7/12 flex-wrap text-3xl font-semibold font-clash-display-bold w-[90%]">Home is where you are,{" you're"} the light in the dark</span>
        <span className="lg:w-1/2 w-[80%] mb-4 md:text-xl text-sm">He gave his only begotten son that whosoever believes in him shall not perish</span>
        <div className="flex gap-5 md:mb-20 mb-10">
          <button className="bg-lightred py-3 px-8 rounded text-sm font-Poppins hover:animate-enlarge">
            Join in Person
          </button>
          <button className="ring-2 ring-white py-3 px-8 rounded text-sm font-Poppins hover:animate-enlarge">
            Join Online
          </button>
        </div>
      </div>
    </div>
    <div className="sm:max-w-[70vw] " >
        <ul className="lg:text-sm flex paddings md:gap-[20px] gap-[10px] uppercase font-clash-display-medium text-xs">  
        {categoryLinks.map((link) => (
          <Link
          key={link.key}
          href={link.href}
          className="hover:text-lightred-100">
            {link.text}
          </Link>
        ))}
        </ul>
    </div>
    </>
  )
}

export default Hero