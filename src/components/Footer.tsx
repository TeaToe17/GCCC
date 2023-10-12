import Image from 'next/image'
import Link from 'next/link'
import {FooterLinks} from '@/constants'
const Footer = () => {
  return (
    <footer className="footer bg-[url('/footer-img.png')] bg-cover bg-no-repeat w-full h-full">
      <div className="md:flex gap-40 border-b pb-10">     
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
        <Image 
         src="/logo.svg"
         width={40}
         height={30}
         alt="footer_logo"
        />
        <h6 className="text-xs w-32 uppercase font-Poppins-Bold leading-3 text-white">Glory realms ministries</h6>
        </div>
        <div className="flex gap-2">
        <Image 
        src="/mail.svg"
        width={24}
        height={24}
        alt="mail_logo"
        />
        <span className="text-white text-sm font-Poppins">info@gloryrealmsministries.org</span>
        </div>
        <div className="flex gap-2">
        <Image 
        src="/phone.svg"
        width={24}
        height={24}
        alt="mail_logo"
        />
        <span className="text-white text-sm mb-4 font-Poppins">(123) 456-7890</span>
        </div>
        <span className="text-white mb-4">Social</span>
        <div className="flex gap-4 mb-6">
          <Image 
          src="/facebook.svg"
          width={9}
          height={10}
          alt="mail_logo"
          />
          <Image 
          src="/instagram.svg"
          width={18}
          height={18}
          alt="mail_logo"
          />
          <Image 
          src="/twitter.svg"
          width={19}
          height={10}
          alt="mail_logo"
          />
          <Image 
          src="/youtube.svg"
          width={22}
          height={10}
          alt="mail_logo"
          />
          <Image 
          src="/wiki.svg"
          width={20}
          height={20}
          alt="mail_logo"
          />
        </div>
      </div>
      <div className="flex gap-10 flex-wrap">
        {FooterLinks.map((link, index) => (
          <div className="flex flex-col" key={index}>
            <span className="text-white mb-4 font-bold">{link.title}</span>
            {link.links.map((foot, index) => (
              <Link
              href={link.href}
              className="text-white text-sm w-full mb-3 font-light font-Poppins"
              key={index}
              >
                {foot}
              </Link>
            ))}
          </div>
        ))}
      </div>
      </div>
      <span className="flexCenter text-white text-sm w-full font-Poppins footerCopyright">© 2023 GCCC | All Rights Reserved</span>
    </footer>
  )
}

export default Footer