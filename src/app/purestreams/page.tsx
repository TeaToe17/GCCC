"use client"
import {useCallback,useState} from "react"
import {DropDown} from "@/components/DropDown"
import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'


const PureStreams = () => {
    const [dropDown, setDropDown] = useState(false)
    const handleDropDown = useCallback(() => {
      setDropDown(prevdropDown => !prevdropDown)
    }, [])
    return(
        <div className='w-full' >
            {dropDown &&  
   <DropDown onClose={handleDropDown}/>
    }
             {!dropDown && 
    <div className="h-full">
     <Header onOpen={handleDropDown}/>
    </div>
      }
            <MinistryComp 
            name = "Pure Streams"
            image1 = "/pureStreamImg1.png"
            image2 = "/pureStreamImg2.png"
            image3 = "/pureStreamImg3.png"
            image4 = "/pureStreamImg4.png"
            image5 = "/pureStreamImg5.png"
            image6 = "/pureStreamImg6.png"
            />
        </div>
    )
}

export default PureStreams