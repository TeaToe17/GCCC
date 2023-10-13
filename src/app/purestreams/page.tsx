import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'

import img1 from "@/../../public/pureStreamImg1.png";

const PureStreams = () => {
    return(
        <div>
            <Header />
            <MinistryComp  
            image1 = {img1}
            />
        </div>
    )
}

export default PureStreams