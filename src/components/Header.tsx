"use client"
import React from 'react'
import Image from 'next/image'
import  Link from 'next/link'
import {Navlinks, MinistriesLinks} from '@/constants'
import {useState} from 'react'
import {useScrollTop} from "@/hooks/usescrolltop"

type Props = {
  key: string
  href: string
  text: string
}

type DownProps = {
  onOpen: () => void;
}
const HeaderLinks = ({key, href, text} : Props) =>{
  return(
    <Link 
    key={key}
    href={href}>
        {text}
    </Link>
  )
}


const Header = ({onOpen}: DownProps) => {
  const [isOpen, setIsOpen] = useState(false)

const dropDown = () => {
  setIsOpen(true)
}
const notDropDown = () => {
  setIsOpen(false)
}

const scrolled = useScrollTop()

  return (
      <div className={`flexBetween left-0 right-0 w-full z-50 top-0 mb-16 font-clash-display fixed paddings  ${scrolled ? "border-b shadow-md w-full bg-white text-black" : ""}`}>
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
         <HeaderLinks key={Navlinks[0].key} href={Navlinks[0].href} text={Navlinks[0].text}/>
         <HeaderLinks key={Navlinks[1].key} href={Navlinks[1].href} text={Navlinks[1].text}/>
        <div className='flex flex-col items-center relative' onMouseEnter={dropDown} onMouseLeave={notDropDown}>
        <HeaderLinks key={Navlinks[2].key} href={Navlinks[2].href} text={Navlinks[2].text}/>
         {isOpen && (
        <div className="dropdown-content flex flex-col bg-lightblue text-gray-600 w-48 items-center justify-center p-2 rounded absolute mt-6">
         {MinistriesLinks.map((link, index)=>(
          <Link
          key={index}
          href={link.href}
          className='hover:bg-blue-400 hover:text-white w-full mb-4 hover:animate-enlarge flexCenter block py-2'
          >
          {link.text}
          </Link>
         ))}
        </div>
        )}
        </div>
         <HeaderLinks key={Navlinks[3].key} href={Navlinks[3].href} text={Navlinks[3].text}/>
         <HeaderLinks key={Navlinks[4].key} href={Navlinks[4].href} text={Navlinks[4].text}/>
        </ul>
        <div className="flex gap-4">
        <button className="bg-lightblue py-2 px-6 rounded-lg text-white hover:animate-enlarge">
          Give
        </button>
        <button className="font-bold text-4xl cursor-pointer lg:hidden h-2" onClick={onOpen}>
          &#8801;
        </button>
        </div>
      </div>
      </div>
  )
}
export default Header