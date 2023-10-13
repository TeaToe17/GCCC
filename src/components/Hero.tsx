import React from 'react'
import Header from './Header'
import {categoryLinks} from '@/constants'
import Link from 'next/link'
const Hero = () => {
  return (
    <>
    <div className="paddings font-clash-display bg-[url('/hero-img.png')] bg-cover bg-no-repeat text-white">
     <Header />
      <div className="flex flex-col gap-4 text-white">
        <span>Welcome to GCCC</span>
        <span className="md:text-5xl xl:w-7/12 flex-wrap text-5xl font-semibold font-clash-display-bold w-30">Home is where you are,{" you're"} the light in the dark</span>
        <span className="xl:w-1/2 mb-4 text-xl">He gave his only begotten son that whosoever believes in him shall not perish</span>
        <div className="flex gap-5 mb-20">
          <button className="bg-lightred py-3 px-8 rounded text-sm font-Poppins hover:animate-enlarge">
            Join in Person
          </button>
          <button className="ring-2 ring-white py-3 px-8 rounded text-sm font-Poppins hover:animate-enlarge">
            Join Online
          </button>
        </div>
      </div>
    </div>
    <div>
        <ul className="lg:text-sm flex paddings gap-8 uppercase font-clash-display-medium text-xs flex-wrap">  
        {categoryLinks.map((link, index) => (
          <Link
          key={index}
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