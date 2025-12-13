import { useContext } from "react";
import herosectionimage from "../assets/home/Hero-BG-scaled-1.jpg"
import Button from "../components/Button";
import Calender from "../components/Calendar"
import services from "../services.json"
import serviceimage1 from "../assets/services/service1.jpg"
// console.log(services);
import service1 from "../assets/services/service1.jpg"
import service2 from "../assets/services/service2.jpg"
import service3 from "../assets/services/service3.jpg"
import service4 from "../assets/services/service4.jpg"

import herosectionimage1 from "../assets/home/Book-an-Appointment-Sec-IMG.jpg"
import {ColorContext} from "../context/color.context"
import { ThirdComponent } from '../pages/About.jsx'

// Create image mapping
const imageMap = {
  "service1.jpg": service1,
  "service2.jpg": service2,
  "service3.jpg": service3,
  "service4.jpg": service4

}
export const Home = function () {
  return (
    <div>
      {/* <img src={services.plans[0]["image-source"]} alt="not load image" /> */}
      <div className="Header  bg-[#f1ecde]  ">
        <section
          className="w-full min-h-[625px]  bg-cover bg-center bg-no-repeat flex  justify-center  items-center lg:justify-start "
          style={{ backgroundImage: `url(${herosectionimage})` }}
        >
          <div className="ps-4">
            <h1 className=" text-[16px] sm:text-[24px] text-white font-[350] mb-8 ">Calorie control, balanced nutrition</h1>
            <p className="text-3xl sm:text-5xl md:text-6xl text-amber-50 lg-font-[400] md:leading-20 mb-6 lg:mb-10  lg:leading-16 ">Start living your healthiest life</p>
            <Button>Book an Appointment</Button>
          </div>


          {/* // */}
        </section>
        {/* Celender start */}
        <div className="max-w-[1150px] mx-auto bg-[#f1ecde] mt-24  md:pb-24">
          <div className="grid md:grid-cols-2 justify-items-center ">
            <Calender />
            {/* <div className="md:mr-16"> <img src={`${herosectionimage}`} alt="hyper1" className="object-cover lg:h-[500px] lg:w-[600px]" /></div> */}
            <div className=" pb-20 ">
              <h1 className="mt-12 font-[600] leading-5 text-[#343F1E] lg:pl-32 text-center md:text-left">Book an Appointment</h1>
              <p className="text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-[400] lg:leading-14 text-[#343F1E] mt-3.5 lg:pl-32 ">Wellness coaching with Lumora</p>
              <p className="lg:pl-32 text-[16px] font-[400] leading-7 mt-5 md:px-auto">Achieve balance and well-being with personalized coaching tailored to your needs. Lumora guides you through sustainable lifestyle changes to help you reach your health and wellness goals. </p>
            </div>
          </div>
        </div>
        {/* Celeder end */}

        <div className="bg-[#E3E9D8] py-20 md:py-25 ">
          <h1 className="flex items-center justify-center  text-xl lg:text-2xl">Coaching Services</h1>
          <h2 className="flex items-center justify-center p-5 md:p-7 text-3xl lg:text-5xl font-[400] leading-[25px]">Create the life you want to live</h2>
          <div className="grid justify-center mdd:grid-cols-2 gap-8 md:gap-x-8 lg:gap-x-12 md:gap-y-8 lg:gap-y-12 px-8 md:px-12 lg:px-36 xl:px-30" >{services.plans.map((item, i)=> <Services key={i} imgSrc={imageMap[services.plans[i]["image-source"]]} startPrice={item["start-price"]}  title={item.title} description={item.description}/>)}</div>
        </div>

        {/* header end */}
      </div>
      <ThirdComponent imageSrc={herosectionimage1} />
    </div>
  );
};

const Services = ({ imgSrc, title, description, startPrice }) => {
  const colors = useContext(ColorContext)
  const color = colors["--ast-global-color-3"]
  const bgColor = colors["--ast-global-color-5"]
  // console.log(bgColor);
  
  return (
    <div className="rounded-xl flex flex-col  max-h-[785px] max-w-[600px] shadow-lg overflow-hidden ">
      <img src={imgSrc} alt="service image" className=" h-3/5 rounded-t-xl   " />
      <div className={`flex flex-col gap-8 h-2/5 p-2  text-[${color}] bg-[${bgColor}] `} style={{backgroundColor : bgColor, color : color}}>
        <h3 className="font-semibold text-2xl" >{title}</h3>
        <p>{description} <span className="font-semibold">start from : {startPrice}</span></p>
        <div className="w-50"><Button>Book An Appointment</Button></div>
      </div>
    </div>
  )
}