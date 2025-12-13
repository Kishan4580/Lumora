import { ColorContext } from '../context/color.context'

import contact from '../assets/contact/contact.jpg'
import { useContext } from 'react'
import Button from '../components/Button'
export function Contact() {
    const rootColors = useContext(ColorContext)
    const formColor = rootColors["--ast-global-color-4"]
    const btnBgColor = rootColors["--ast-global-color-0"]
    const textColor = rootColors["--ast-global-color-2"]


    return (
        <div className='bg-cover bg-no-repeat flex flex-col md:flex-row justify-center md:justify-around gap-4 sm:gap-8 md:gap-12 lg:gap-16  py-10 px-2 sm:py-6  md:py-8 lg:py-10 md:px-4 lg:px-6  ' style={{ backgroundImage: `url(${contact})`, color: textColor }}>
            <div className="flex flex-col sm:basis-[450px] md:justify-start gap-2 sm:gap-3 lg:gap-4 py-6 sm:py-10 md:py-14 lg:py-18 px-1 sm:px-2 md:px-4 max-w-[400px] mx-10 sm:mx-20 md:mx-0">
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Contact</h4>
                <h1 className="py-2 sm:py-3 md:py-4 lg:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Boost health with functional nutrition</h1>
                <p className="py-2 sm:py-4 lg:py-6 ">Have questions or need more information? Contact me to start your path to a healthy, balanced life.</p>
                <ul className="flex flex-col gap-2 sm:3 mdg:gap-5">
                    <li><Icon ><i className="fa-solid fa-phone" style={{ color: "#325232" }}></i></Icon> 91 1884793739</li>
                    <li><Icon ><i className="fa-solid fa-envelope" style={{ color: "#325232" }}></i></Icon> support@kishan@gmail.com</li>
                    <li><Icon ><i className="fa-solid fa-location-dot" style={{ color: "#325232" }}></i></Icon> 127, Sandalpur, Dewas, Madhya Pradesh</li>
                </ul>
            </div>
            <div className="border border-gray-600 rounded-md px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-5 md:py-7 lg:py-9 min-w-[600] mx-10 sm:mx-20 md:mx-0" style={{ backgroundColor: formColor ? formColor : 'transparent' }}>
                <h2 className="py-2 sm:py-3 md:py-5 lg:py-7 text-lg sm:text-xl md:text-2xl lg:text-3xl">Drop us a line</h2>
                <form action="" className="flex flex-col  sm:text-lg md:text-xl lg:text-2xl gap-2">

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder=' Enter your name' className=' outline  hover:outline-gray-800 my-2 sm:my-3 lg:my-4 px-2 py-2 sm:py-4 lg:py-5  border-0 border-lime-700 rounded-md w-full' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder=' Enter your email' className=' outline hover:outline-gray-800 my-2 sm:my-3 lg:my-4 px-2 py-2 sm:py-4 lg:py-5 border border-gray-700 rounded-md w-full ' />
                    </div>
                    <div>
                        <label htmlFor="message" >Message</label>
                        <textarea name="message" placeholder='Leave us a Message' className=' outline hover:outline-gray-800 my-2 sm:my-3 md:my-4 lg:my-5 border border-lime-700 rounded-md p-2 sm:p-3 md:p-4 lg:p-5 w-full h-auto min-h-[180px]' id="message"  ></textarea>
                    </div>
                    <Button  >Book a Appointment</Button>
                </form>
            </div>
        </div>
    )
}


function Icon({ children }) {
return <span>{children}</span>
}