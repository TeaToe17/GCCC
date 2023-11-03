"use client"
import React from 'react'
import  Link from 'next/link'
import {Navlinks, MinistriesLinks} from '@/constants'
import {useState} from 'react'


type Props = {
  key: string
  href: string
  text: string
}
type dropDownProps = {
  onClose: () => void;
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

 export const DropDown = ({onClose} : dropDownProps) => {
 const [isOpen, setIsOpen] = useState(false)
 const dropDown = () => {
  setIsOpen(true)
 }
 const notDropDown = () => {
  setIsOpen(false)
 }
  return(
    <>
    
      <div className="absolute z-50 w-full bg-lightblue text-white h-full lg:hidden  ease-in duration-700">
        <div className="flexEnd">
          <button className="font-bold text-4xl cursor-pointer paddings" onClick={onClose}>
          &#10006;
          </button>
        </div>
      <div className="flexCenter flex-col mt-16">
        <div className="flex flex-col text-2xl gap-4">
          <HeaderLinks text={Navlinks[0].text} href={Navlinks[0].href} key={Navlinks[0].key}/>
          <HeaderLinks text={Navlinks[1].text} href={Navlinks[1].href} key={Navlinks[1].key}/>
          <div className='flex items-center relative' onMouseEnter={dropDown} onMouseLeave={notDropDown}>
          <span>Ministries</span>
         {isOpen && (
        <div className=" grid grid-cols-2 bg-white text-gray-600 w-40 items-center justify-center p-2 rounded absolute mt-6 ml-28">
         {MinistriesLinks.map((link, index)=>(
          <Link
          key={index}
          href={link.href}
          className='hover:bg-blue-400 hover:text-white w-full mb-2 hover:animate-enlarge block py-1 text-xs'
          >
          {link.text}
          </Link>
         ))}
        </div>
        )}
        </div>
          <HeaderLinks text={Navlinks[3].text} href={Navlinks[3].href} key={Navlinks[3].key}/>
          <HeaderLinks text={Navlinks[4].text} href={Navlinks[4].href} key={Navlinks[4].key}/>
        </div>
      </div>
      </div>

    </>
  )
}
