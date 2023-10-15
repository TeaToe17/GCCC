import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'
const EconomicHub = () => {
    return(
        <div>
             <Header />
             <MinistryComp 
            name = "Economic Hub"
            image1 = "/eco1.svg"
            image2 = "/eco2.svg"
            image3 = "/eco3.svg"
            image4 = "/eco4.svg"
            image5 = "/cardimg1.svg"
            image6 = "/cardimg2.svg"
            />
        </div>
    )
}

export default EconomicHub