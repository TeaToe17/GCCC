import Image from "next/image";

const Profile = (props) => {
    return(
        <div className="flex flex-col justify-center items-center text-center text-[12px] lg:text-[15px] mb-[20px] ">
            <Image src = {props.image} alt="img" className="rounded-lg w-[80px] lg:w-[258px] lg:mb-[10px] lg:mt-[20px] " />
            <h1 className="font-bold" > {props.name} </h1>
            <p> {props.branchName} </p>
        </div>
    )
} 

export default Profile;