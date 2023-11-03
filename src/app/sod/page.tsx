"use client"
import {useCallback,useState} from "react"
import {DropDown} from "@/components/DropDown"
import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'

const SchoolOfDestiny = () => {
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
            name = "School Of Destiny"
            image1 = "/sod1.svg"
            image2 = "/sod2.svg"
            image3 = "/sod3.svg"
            image4 = "/sod4.svg"
            image5 = "/cardimg1.svg"
            image6 = "/cardimg2.svg"
            />
        </div>
    )
}

export default SchoolOfDestiny