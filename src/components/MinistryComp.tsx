import Image from "next/image";

const MinistryComp = (props) => {
    return (
      <div>
        <div className="flex flex-col items-center justify-center m-[40px] ">
          <p className="font-bold text-[64px] ">Pure Streams</p>
          <p className="mt-[20px] mb-[20px] text-center ">
            Experience the transformative power of worship and encounter God's{" "}
            <br />
            presence through our Pure Streams ministry at GRM, Passionately
            ministering <br /> to God in songs and Psalms.
          </p>
          <div className="bg-red-600 text-white">
            <button className="">Visit out Youtube</button>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <Image
            src={props.image1}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
          <Image
            src={props.image1}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
          <Image
            src={props.image1}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
          <Image
            src={props.image1}
            alt="img"
            className=" w-[296px] h-[412px] m-[10px] "
          />
        </div>
        <div className="flex justify-around m-[20px] ">
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
        <div className="m-[50px]" >
            <div className="flex justify-center " >
                <p className="mr-auto" >
                    Upcoming Events
                </p>
                <p>
                    arrow
                </p>
            </div>
            <div>
                <img src={props.image1} alt="" className="w-[361px] h-[300px] " />
            </div>
        </div>
      </div>
    );
}
export default MinistryComp;