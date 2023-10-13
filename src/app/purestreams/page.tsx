import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'

import img1 from "@/../../public/pureStreamImg1.png";
import img2 from "@/../../public/pureStreamImg2.png";
import img3 from "@/../../public/pureStreamImg3.png";
import img4 from "@/../../public/pureStreamImg4.png";
import img5 from "@/../../public/pureStreamImg5.png";
import img6 from "@/../../public/pureStreamImg6.png";

const PureStreams = () => {
    return(
        <div>
            <Header />
            <MinistryComp 
            name = "Pure Streams"
            image1 = {img1}
            image2 = {img2}
            image3 = {img3}
            image4 = {img4}
            image5 = {img5}
            image6 = {img6}
            />
        </div>
    )
}

export default PureStreams