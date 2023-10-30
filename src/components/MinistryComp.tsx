

import Image from "next/image";
import Link from "next/link";

import PureStreams from "./Purestream";
type Props ={
  name:string,
  image1:string,
  image2:string,
  image3:string,
  image4:string,
  image5:string,
  image6:string,

}
const MinistryComp = ({name,image1,image2,image3,image4,image5,image6}:Props) => {
    return (
      <div>
        <Link href="/">
          <div className=" xl;hidden lg:hidden md:hidden flex items-center font-bold text-red-700 text-left cursor-pointer lg:ml-[153px] ">
            <img src="arrow-right.png" alt="" className="h-[16px] m-[2px] " />
            Back
          </div>
        </Link>
        <div className="flex flex-col items-center justify-center mb-[40px]  ">
          <p className="font-bold lg:text-[64px] md:text-[64px] text-[30px] ">
            {" "}
            {name}{" "}
          </p>
          <p className="mt-[20px] mb-[20px] text-center lg:mx-[10px] box-border w-[60vw] ">
            Experience the transformative power of worship and encounter God's{" "}
            <br />
            presence through our Pure Streams ministry at GRM, Passionately
            ministering <br /> to God in songs and Psalms.
          </p>
          <div className="bg-red-600 text-white">
            <button className="py-3 px-4 rounded-xl">Visit out Youtube</button>
          </div>
        </div>

        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col ">
          <Image
            src={image1}
            width={412}
            height={412}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
          <Image
            src={image2}
            width={412}
            height={412}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
          <Image
            src={image3}
            width={412}
            height={412}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
          <Image
            src={image4}
            width={412}
            height={412}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
        </div>
        <div className="flex justify-around m-[20px] box-border lg:flex-row md:flex-row flex-col lg:justify-center lg:mx-[1vw] mx-[15vw] ">
          <p className="basis-[40%] font-bold ">
            Experience the power, joy, and <br /> freedom found in worshiping
            God
          </p>
          <p className="basis-[50%]">
            We believe that worship is a powerful avenue to encounter the
            presence of God and be transformed by His glory. Through passionate
            music, heartfelt lyrics, and an atmosphere of adoration, we create
            an environment where hearts are stirred, souls are refreshed, and
            lives are forever changed.
          </p>
        </div>
        <div className="">
          <div className="flex justify-center ml-[20px] mt-[20px] mb-[20px] ">
            <p className="mr-auto">Upcoming Events</p>
            <img src="polygon 2.png" alt="" />
          </div>
          <div className="flex overflow-scroll :web ">
            <PureStreams image1={image5} />
            <PureStreams image1={image6} />
            <PureStreams image1={image1} />
          </div>
          <div className="bg-[url('/purestreampic.png')] h-[500px] w-full m-0 mt-[50px] text-white flex flex-col  justify-center p-[30px] ">
            <p className="font-bold lg:text-[20px] ">
              Connect with Children's Church
            </p>
            <p className="mt-[20px] mb-[20px] ">
              Providing a safe space for growth and exploration
            </p>
            <div className="flex gap-[20px]">
              <div className="bg-red-500 w-[238px] h-[56px] lg:text-[25px] md:text-[23px] text-[15px] flex justify-center items-center ">
                Visit Our Instagram
              </div>
              <div className="bg-white w-[56px] h-[56px] flex justify-center items-center  ">
                <img src="facebook.png" alt="" />
              </div>
              <div className="bg-white w-[56px] h-[56px] flex justify-center items-center ">
                <img src="instagram.png" alt="" />
              </div>
              <div className="bg-white w-[56px] h-[56px] flex justify-center items-center ">
                <img src="twitter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default MinistryComp;