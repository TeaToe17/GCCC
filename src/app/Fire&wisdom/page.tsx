import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'
const Fire = () => {
    return(
        <div className="paddings">
             <Header />
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