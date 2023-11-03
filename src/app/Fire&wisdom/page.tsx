"use client"
import {useCallback,useState} from "react"
import {DropDown} from "@/components/DropDown"
import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'
const Fire = () => {
    const [dropDown, setDropDown] = useState(false)
    const handleDropDown = useCallback(() => {
      setDropDown(prevdropDown => !prevdropDown)
    }, [])
    return(
        <div>
            {dropDown &&  
   <DropDown onClose={handleDropDown}/>
    }
             {!dropDown && 
    <div className="h-full">
     <Header onOpen={handleDropDown}/>
    </div>
      }
             <MinistryComp 
            name = "Fire & Wisdom conference"
            image1 = "/fandw.svg"
            image2 = "/fandw2.svg"
            image3 = "/fandw3.svg"
            image4 = "/fandw4.svg"
            image5 = "/cardimg1.svg"
            image6 = "/cardimg2.svg"
            />
        </div>
    )
}

export default Fire