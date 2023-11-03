"use client"
import {useCallback,useState} from "react"
import {DropDown} from "@/components/DropDown"
import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'
const TeensMinistry = () => {
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
            name = "Teens Ministry"
            image1 = "/teen1.svg"
            image2 = "/teen2.svg"
            image3 = "/teen3.svg"
            image4 = "/teen5.svg"
            image5 = "/cardimg1.svg"
            image6 = "/cardimg2.svg"
            />
        </div>
    )
}

export default TeensMinistry