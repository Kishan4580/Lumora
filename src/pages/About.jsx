import React from "react";
import Button from "../components/Button";
import about1 from "../assets/about/about1.jpg"
import about2 from "../assets/about/about2.jpg"
import about3 from "../assets/about/about3.jpg"

const textColor = "text-white";
const textColor1 = "#343f1e";
const backgroundColor = "#e3e9d8";


function About() {

  return (
    <>
      <div className={` ${textColor} relative `}>
        <div className={`bg-image bg-cover bg-no-repeat  bg-center min-h-[319px] sm:min-h-[293px] md:min-h-[550px] lg:min-h-[650px]`} style={{ backgroundImage: `url(${about1})` }} />
        <div className={`absolute bottom-[80px]  md:bottom-[230px]  px-6 sm:px-12  lg:px-24 lg:max-w-[600px]`} >
          <div className="text-2xl md:text-3xl lg:text-4xl text-center sm:[text-left, px-4] md:py-4 lg:py-8  "><p className="sm:w-32">About Us</p></div>
          <h1 className="  text-4xl md:text-5xl lg:text-7xl text-center sm:text-left sm:w-full  ">Your health is my passion.</h1>
        </div>
      </div>
      <div style={{color: textColor1}} >
        <SecondComponent  />
      <ThirdComponent imageSrc={about2} alt={'About 2'} />
      <FourthComponent />
      <FifthComponent imageSrc={about3} alt={'About 3'} />

      </div>
    </>
  );
}

function SecondComponent() {
  return (
    <div className="md:flex   p-4 sm:py-36 justify-center " style={{backgroundColor:backgroundColor, color: textColor1}}>
      <Heading />
      <Content />
    </div>
  )
}

function Heading() {
  return (
    <div className="lg:min-w-[580px] p-2 sm:p-4">
      <h2 className="text-4xl sm:4xl md:text-5xl lg:text-6xl text-center p-2 ">Taking an individualized, root cause approach to health.</h2>

    </div>
  )

}

function Image({ imageSrc, alt }) {
  return (
    <div className="py-4 md:min-w-[500px] lg:max-w-[620px]"><img src={imageSrc} alt={alt} className="w-full max-w-full rounded-xl" /></div>
  )
}

function Content() {
  return (
    <div className="text-center p-4 ">
      <h3 className="text-lg font-bold p-2 sm:p-4">I Help My Clients Build Healthy Habits, Feel Better, And Find What Works For Them.</h3>
      <p className="">I'm Kishan, a passionate health coach and certified nutrition specialist with 8 years of experience helping people transform their lives through better nutrition and lifestyle choices. My journey into health coaching began with a personal quest for well-being, which ignited a deep desire to help others find their path to health</p>
    </div>)
}

function ThirdComponent({ imageSrc, alt }) {
  return (
    <div className="md:flex px-3 py-8" style={{color: textColor1}}>
      <Image imageSrc={imageSrc} alt={alt}  />
      <div className="md:flex md:flex-col md:py-18 lg:py-32 md:px-6 lg:px-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl">Supporting you in achieving and maintaining a healthy, balanced life.</h2>
        <p className="md:py-8 lg:py-12">I believe that one size does NOT fit all. I take a holistic approach to nutrition using evidenced-based integrative and functional medicine. This means helping you feel your best by targeting the root cause of your concerns and supporting you in building maintainable nutrition and lifestyle habits for long-term.</p>
      </div>
    </div>
  )

}
const features = [
  { number: 92, "title": "Happiness Rate", "text": "My clients report feeling happier more energized after completing their coahcing program. health and wellness.", }
  , { number: 88, "title": "Success in Habit Formation", text: "Clients successfully adopt and sustain healthy habits over the long term, thanks to tailored strategies and consistent support." },
  { number: 83, "title": "Improved Nutrition Knowledge", text: "Clients leave the program with a deeper understanding of nutrition and how to make better food choices." }
]
function FourthComponent() {
  return (
    <div className="md:flex px-3 gap-4 sm:px-8 py-8 sm:py-16 md:py-32 flex-nowrap " style={{ backgroundColor: backgroundColor, color: textColor1 }}>
      {features.map(element => (
        <div key={element.title} className="flex flex-col  justify-center items-center py-8">
          <h3 className="text-3xl text-emerald-600">{element.number}%</h3>
          <h4 className="text-2xl font-bold py-4">{element.title}</h4>
          <p className="text-lg">{element.text}</p>
        </div>
      ))}
    </div>
  )


}

function FifthComponent({ imageSrc, alt }) {

  return (
    <div className="md:flex px-3 py-8 " style={{color: textColor1}}>
      <Image imageSrc={imageSrc} alt={alt} />
      <div className="flex flex-col  min-h-64 px-5 gap-6 py-16 md:py-36 lg:py-52 ">
        <h4 className=" text-2xl md:text-3xl lg:text-4xl">Why work with me</h4>
        <p>Choosing me as your health coach means choosing a partner who is dedicated to your success. I stay current with the latest research and trends in nutrition to provide you with evidence-based advice. My approach is compassionate, non-judgmental, and focused on helping you find what works best for you.</p>
        <Button>Book a Appointment</Button>
      </div>
    </div>
  )


}

export { About, Image, backgroundColor, textColor1, ThirdComponent };