import React from "react";
import HOC from "./HOC";
import { BsFeather } from "react-icons/bs";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { GiMedicines, GiRibbonMedal, } from "react-icons/gi";
import { FaCow } from "react-icons/fa6";
import { SiStudyverse } from "react-icons/si";
import { BiFoodTag } from "react-icons/bi";
import { IoWaterSharp } from "react-icons/io5";



const data = [
  {
    h1: "Gau Seva",
    p1: "The cow is considered the mother in Sanatan Dharma and is revered as the holiest animal among all animals in India.",
    p2: " Dumb beasts, such as animals that cannot speak, are unable to ask for help or food. Our team strives to enhance nutritional offerings by addressing specific dietary needs at different stages of a cow's life. We are committed to providing complete nourishment for the cows we serve. Through a culture of responsibility and care, our team ensures the ethical treatment and proper nourishment of these animals",
    img: require("../assets/image/Cherity/SaveCow.jpg"),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-column-reverse flex-lg-row flex-md-row',
    Icon: <FaCow className="me-2" />
  },

  {
    h1: "Shiksha",
    p1: "The sermon given by Lord Krishna to Arjuna just before the beginning of the Mahabharat war is famous by the name of Shrimad Bhagwad Geeta.",
    p2: "The Bhagavad Gita, a sacred Hindu scripture, imparts profound philosophical teachings, urging us to embrace purity, strength, discipline, honesty, kindness, and integrity to fulfil our purpose. We spread life's lessons through learning and teaching, inspired by its timeless wisdom.",
    img: require("../assets/image/shiksha/2.jpg"),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-md-row-reverse flex-column-reverse',
    Icon: <SiStudyverse className="me-2" />
  },
  {
    h1: "Annsathi",
    p1: "Emphasizing the impact of individual actions on the lives of less fortunate children, we encourage a collective effort to address food scarcity through the Social Army team. The Social Army group strives to provide food to hungry and poor children, among others.",
    p2: "We can take care of and provide food for hungry children by nurturing a spirit of generosity through giving, while also reducing food wastage. We can teach our children not to take more food than they can eat, to avoid overeating, and not to throw away food, as there are other poor children who do not have enough to eat.",
    img: require("../assets/image/6.jpg"),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-column-reverse flex-lg-row flex-md-row',
    Icon: <BiFoodTag className="me-2" />
  },
  {
    h1: "Live Blood Bank",
    p1: "The Social Army group's significant project, close to the heart, is called the 'Live Blood Bank'. The Live Blood Bank, a non-profit association led by the Social Army, is helping needy individuals by providing them with the most valuable resource.",
    p2: "The Live Blood Bank, which is also in the pipeline, aims to facilitate blood donations during emergencies. This project connects a vast network of blood donors across various cities and states through a centralized system. By donating blood, you are saving human lives.",
    img: require("../assets/image/data collection.jpg"),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-md-row-reverse flex-column-reverse',
    Icon: <IoWaterSharp className="me-2" />
  },
  {
    h1: "Mahila Shashaktikaran",
    p1: "Women's empowerment (or female empowerment) may be defined in several ways, including accepting women's viewpoints, making an effort to seek them and raising the status of women through education, awareness, literacy, and training.",
    p2: "By prioritizing education and entrepreneurial training, we equip women with the skills and knowledge needed for economic independence. Our legal awareness workshops ensure protection from discrimination and abuse, while healthcare initiatives address women's holistic well-being. Additionally, we conduct many seminars to encourage women's empowerment.",
    img: require('../assets/image/women/Women5.jpg'),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-column-reverse flex-lg-row flex-md-row',
    Icon: <GiRibbonMedal className="me-2" />
  },
  {
    h1: "Drug Bank",
    p1: "The Drug Bank, a non-profit association by the Social Army, also provides assistance to impoverished individuals in our country.",
    p2: "DrugBank supports advanced searching using a powerful search engine. It serves as a valuable resource for researchers, healthcare professionals, and the pharmaceutical industry to access information about various drugs, including their uses and chemical properties. Most people can easily purchase these medicines through our DrugBank.",
    img: require("../assets/image/drugbank/drugbank121 (5).jpg"),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-md-row-reverse flex-column-reverse',
    Icon: <GiMedicines className="me-2" />
  },
  {
    h1: "Paryavaran Raksha",
    p1: 'Paryavaran Raksha mission focuses on environmental conservation and sustainability.',
    p2: "Our mission includes raising awareness, promoting eco-friendly practices, and educating communities about the importance of protecting natural resources. By prioritizing education and community involvement, we equip individuals with the knowledge and tools needed for sustainable living.Our initiatives include tree plantation drives, clean dumas, waste management workshops, and seminars on climate change.Additionally, we work on policy advocacy to ensure long- term environmental protection.",
    img: require("../assets/image/HomePage/SaveEnviroment.jpg"),
    css: 'Charity row justify-content-center align-items-center p-4 m-0 g-2 g-lg-5 projecthover my-5 flex-column-reverse flex-lg-row flex-md-row',
    Icon: <GiRibbonMedal className="me-2" />
  },
]
function Charity() {
  return (
    <>
      <div className="charitybck_image ">
        <div className="overlay3 w-100">
          <div className="container">
            <div className="row justify-content-center align-items-center vh-100 ">
              <div className="container text-center text-white" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1800">
                <p className="hometext fs-2">
                  <span className="spncolor">Generosity </span>isn't just about what we
                  give, but the lives we change and the hope
                  <span className="spncolor"> we ignite through our acts of kindness</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="charitycolor">
        <div className="container-lg py-5 ">
          <div className="abouththought fw-bold text-center headcolor" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
            <span className="fs-3 "><BsFeather /></span> Our Charity
          </div>
          <div className="abouthead fs-1 fw-bold text-center" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="50"
            data-aos-duration="1500">
            Our <span className="headcolor">Projects</span>
          </div>
          <div className="pera text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1800">
            <span className="fw-medium">The Social Unity Charitable Trust</span> offers solace and support, while the Social Army Team illuminates paths
            from despair to hope, uniting to be beacons of light in the darkest moments.
          </div>
          <div className="maindiv py-5">
            {data.map((Item) => (

              <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="50" data-aos-duration="1500">
                <div className={Item.css}>
                  <div className="col-12 col-lg-8 col-md-6 m-0 Charity">
                    <div className="h-100 py-2 py-lg-0">
                      <div className="abouththought fw-bold fs-5">
                        <span className="fs-3 ">{Item.Icon}</span> {Item.h1}
                      </div>
                      <div className="pera py-1">
                        <span className="abouththought fs-5 fw-bold"><AiOutlineDoubleRight /></span>{Item.p1}
                      </div>
                      <div className="pera py-1">
                        <span className="abouththought fs-5 fw-bold"><AiOutlineDoubleRight /></span>{Item.p2}
                      </div>
                    </div>
                  </div>
                  <div className="col-10 col-lg-4 col-md-6 p-0 m-0 ">
                    <div className="eventcardsize" >
                      <img src={Item.img} alt="Not Found" className='img-fluid h-100 volunimage object-fit-cover rounded-top  w-100' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}


export default HOC(Charity);
