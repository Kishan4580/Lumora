// const images = Array.from({ length: 6 }, (_, i) => {
//     const element = import(`../assets/services/service${i + 1}.jpg`);
//     return element;
// });
import Button from '../components/Button';

import service1 from '../assets/services/service1.jpg';
import service2 from '../assets/services/service2.jpg';
import service3 from '../assets/services/service3.jpg';
import service4 from '../assets/services/service4.jpg';
import service5 from '../assets/services/service5.jpg';
import { textColor1 } from './About';
import { useContext } from 'react';
import { ColorContext } from '../context/color.context'


export function Services() {
    const rootColors = useContext(ColorContext);
    const bgColor1 = rootColors['--ast-global-color-0'];
    const bgColor2 = rootColors["--ast-global-color-1"];
    const textColor3 = rootColors["--ast-global-color-2"];
    const textColor4 = rootColors["--ast-global-color-3"];
    const bgColor5 = rootColors["--ast-global-color-4"];
    const bgColor6 = rootColors["--ast-global-color-5"];
    const bgColor7 = rootColors["--ast-global-color-6"];

    return (
        <div className='' style={{color: textColor3}}>
            <FirstComponent />
            <SecondComponent bgColor2={bgColor2} textColor4={textColor4} textColor3={textColor3} />
            <ThirdComponent bgColor2={bgColor2} textColor4={textColor4} />
            <FourthComponent bgColor2={bgColor2} textColor4={textColor4} />
            <FifthComponent bgColor2={bgColor2} textColor4={textColor4} />

        </div>
    )
}

function FirstComponent() {
    return (
        <div className="bg-cover bg-no-repeat bg-center min-h-[367px]  " style={{ backgroundImage: `url(${service5})`, color: textColor1 }}>
            <div className="flex flex-col items-center justify-center text-center md:text-left pt-32 pb-20   h-full">
                <h6 className='text-lg sm:text-1xl md:3xl lg:4xl' style={{ color: textColor1, fontWeight: 700 }}>Services</h6>
                <h1 className='text-3xl sm:text-5xl md:6xl lg:7xl'>Empowering Your balanced, fulfilled life.</h1>
            </div>
        </div>
    )

}

function SecondComponent({bgColor2,textColor3, textColor4}) {
    
    return (
        <div className="flex flex-col md:flex-row  justify-center align-items-center  gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-8 md:p-12 lg:p-16">
            <Image imageSrc={service1} alt={'service 2'} />
            <div className="flex flex-col gap-2 sm:gap-2 md:gap-4 lg:gap-8 p-2 sm:p-4 md:p-6 lg:p-8 ">
                <h2 className='sm:text-2xl md:text-4xl'>Personalized nutrition plans</h2>
                <h5 className='sm:text-xl' style={{ color: textColor4 ? textColor4 : textColor3, fontWeight: 700 }}>Start from : ₹499</h5>
                <div className='border-t bottom-3  ' style={{borderBlockColor: textColor3}}></div>
                <h6 style={{ color: textColor4 ? textColor4 : textColor3, fontWeight: 700 }}>Customized Meal Plans</h6>
                <p className='sm:pb-2'>Personalized to Your unique dietary needs and preferences</p>
                <h6 style={{ color: textColor4 ? textColor4 : textColor3, fontWeight: 700 }}>Nutritional Guidance</h6>
                <p className='sm:pb-2'>Expert advice to help you make informed food choices</p>
                <h6 style={{ color: textColor4 ? textColor4 : textColor3, fontWeight: 700 }}>Adaptable Strategies</h6>
                <p className='sm:pb-2'>Flexible approaches to suit your lifestyle and preferences</p>
                                <div><Button >Get Started</Button></div>

            </div>
        </div>
    )


}
function Image({ imageSrc, alt }) {

    return (
        <div className="flex flex-col justify-center ">
            <img src={imageSrc} alt={alt} className="object-cover rounded-lg sm:min-h-[400px] max-w-full " />
        </div>
    )
}

function ThirdComponent({ bgColor2, textColor4 }) {
    return (
        <div className="flex flex-col md:flex-row justify-center  gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col gap-4 sm:gap-8 md:gap-10 lg:gap-12 p-4 sm:p-8 md:p-12 lg:p-16 ">
                <h2 className='sm:text-2xl md:text-4xl'>Weight management counseling</h2>
                <h5>Start from : ₹999</h5>
                <div className='border-t bottom-2'></div>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Personalized weight goals</h6>
                <p>Customized plans to achieve realistic weight targets.</p>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Behavioral support</h6>
                <p>Strategies to build healthier eating habits.</p>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Sustainable practices</h6>
                <p>Long-term weight management techniques.</p>
                               <div><Button >Get Started</Button></div>

            </div>
            <Image imageSrc={service2} alt={'service 3'} />

        </div>
    )

}

function FourthComponent({ bgColor2, textColor4 }) {

    return (
        <div className="flex flex-col md:flex-row justify-center  gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 sm:p-8 md:p-12 lg:p-16">
            <Image imageSrc={service4} alt={'service 2'} />
            <div className="flex flex-col gap-4 sm:gap-8 md:gap-10 lg:gap-12 p-4 sm:p-8 md:p-12 lg:p-16 "><h2 className='sm:text-2xl md:text-4xl'>Expand your spiritual knowledge</h2>
                <h5 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Start from : ₹499</h5>
                <div className='border-t bottom-2'></div>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Mindfulness techniques</h6>
                <p>Practical methods to enhance your spiritual practice.</p>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Lifestyle Integration</h6>
                <p>Practical tips for incorporating healthy habits.</p>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Inner Peace and Growth</h6>
                <p>Focus on developing a deeper connection with your spiritual self.</p>
                <div><Button >Get Started</Button></div>
                {/* <button className=' py-1 px-3 sm:px-5 sm:py-3 max-w-44 bgColor2 rounded-full'>Get Started</button> */}
            </div>
        </div>
    )

}

function FifthComponent({ bgColor2, textColor4 }) {
    return (
        <div className="flex flex-col md:flex-row justify-center  gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 sm:p-8 md:p-12 lg:p-16">
            <div className="flex flex-col gap-4 sm:gap-8 md:gap-10 lg:gap-12 p-4 sm:p-8 md:p-12 lg:p-16 ">
                <h2 className='sm:text-2xl md:text-4xl'>Holistic wellness coaching</h2>
                <h5>Start from : ₹999</h5>
                <div className='border-t bottom-2'></div>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Comprehensive Assessments</h6>
                <p>In-depth evaluations to understand your unique needs</p>
                <h6 className='font-bold' style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Goal Setting</h6>
                <p>Collaborative planning to achieve your wellness objectives</p>
                <h6 style={{ color: textColor4 ? textColor4 : undefined, fontWeight: 700 }}>Ongoing Support</h6>
                <p>Continuous guidance to keep you on track</p>
                <div><Button >Get Started</Button></div>
            </div>
            <Image imageSrc={service3} alt={'service 3'} />

        </div>
    )
}
