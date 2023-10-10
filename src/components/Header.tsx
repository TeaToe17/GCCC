import React from 'react'
import Image from 'next/image'
import  Link from 'next/link'
import {Navlinks} from '@/constants'
const Header = () => {
  return (
      <div className="flexBetween w-full h-full mb-16 font-clash-display text-white">
      <Link
      href="/"
      >
      <div className="flex gap-1">
      <Image 
       src='/logo.svg'
       width={40}
       height={30}
       alt="logo"
      />
      <h6 className="text-xs w-32 uppercase font-Poppins leading-3">Glory realms ministries</h6>
      </div>
      </Link>
      <div className="flex gap-4 items-center">
        <ul className="xl:flex hidden text-small gap-7 uppercase font-clash-display-medium">
        {Navlinks.map((links) => (
          <Link 
          key={links.key}
          href={links.href}>
              {links.text}
          </Link>
        ))}
        </ul>
        <button className="bg-lightblue py-2 px-6 rounded-lg text-white hover:animate-enlarge">
          Give
        </button>
      </div>
      </div>
  )
}

export default Header