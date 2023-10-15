import Image from "next/image";

type Props = {
  image1:string
}
const PureStreams = ({image1}:Props) => {
    return (
      <div className="flex flex-row mx-[40px] ">
        <Image
          src={image1}
          width={250}
          height={250}
          alt="img"
          className="min-w-[250px] h-[250px]  "
        />
        <div className="basis-[45%] ml-[50px] mr-[50px]">
          <p className="font-bold">Psalms Hymns & Spiritual Song</p>
          <div className="flex mt-[20px] mb-[20px] ">
            <img src="date_range.png" alt="" className="h-[30px]" />
            <p className="ml-[5px]">Saturday May 21, 2023 | 12:30 PM</p>
          </div>
          <div className="flex mt-[20px] mb-[20px] ">
            <img src="location.png" alt="" className="w-[30px] h-[30px] " />
            <p className="ml-[5px]">
              12 Efon Alaye Street, Off Sule Abore, Lagos. Nigeria
            </p>
          </div>
          <button className="border-[1px] w-[281px] h-[43px] mt-[45px] ">
            + Add to Calender
          </button>
        </div>
      </div>
    );
}

export default PureStreams