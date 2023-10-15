import Header from '@/components/Header'
import MinistryComp from '@/components/MinistryComp'
const ChildrenChurch = () => {
    return(
        <div>
            <Header />
            <MinistryComp 
            name = "Children's Church"
            image1 = "/child1.svg"
            image2 = "/child2.svg"
            image3 = "/child3.svg"
            image4 = "/child4.svg"
            image5 = "/cardimg1.svg"
            image6 = "/cardimg2.svg"
            />
        </div>
    )
}

export default ChildrenChurch