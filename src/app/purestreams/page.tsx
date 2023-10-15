import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'


const PureStreams = () => {
    return(
        <div className='w-full' >
            <Header />
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