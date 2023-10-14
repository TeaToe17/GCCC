import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'
const JesusGirls = () => {
    return(
        <div className="paddings">
             <Header />
             <MinistryComp 
            name = "Fire & Wisdom conference"
            image1 = "/girl1.svg"
            image2 = "/girl2.svg"
            image3 = "/girl3.svg"
            image4 = "/girl4.svg"
            image5 = "/cardimg1.svg"
            image6 = "/cardimg2.svg"
            />
        </div>
    )
}

export default JesusGirls