import { Image } from '../pages/About.jsx'
import about3 from "../assets/footer/footer1.svg"
import { backgroundColor, textColor1 } from '../pages/About.jsx'
export default function Footer() {
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor1 }} className='min-h-80 py-8 px-2'>
      <div className=" flex flex-col sm:flex-row  justify-center text-center sm:text-left  gap-4  sm:min-h-[500px] min-h-[320px]" >
        <div className=' flex-1'>
          <Logo></Logo>
          <p>Get news about our latest sale dates</p>
        </div>
        <div className='flex-1 px-2 sm:px-4 md:p-6  '>
          <h3 className='text-lg font-semibold'>Company</h3>
          <ul className=' my-2 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
            <Link href="#">About Us</Link>
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>
          </ul>
        </div>
        <div className='flex-1 px-2 sm:px-4 md:p-6 '>
          <h3 className='text-lg font-semibold'>Services</h3>
          <ul className=' my-2 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6'>
            <Link href="#">Consulting</Link>
            <Link href="#">Therapy</Link>
            <Link href="#">Wellness Programs</Link>
          </ul>
        </div>


        <div className='flex-1 px-2 sm:px-4 md:p-6 '>
          <h3 className='text-lg font-semibold'>Address</h3>
          <ul className=' my-2 flex  flex-col justify-center sm:gap-3 md:gap-4 lg:gap-6'>
            <li>123 Sandalpur St.</li>
            <li>Dewas, HC 12345</li>
            <li>India</li>
          </ul>
          <p className='text-center sm:text-left'><b>Phone:</b> +91 12345 67890</p>
          <ul className='inline-flex my-2 '>
            <li><Link href="https://www.linkedin.com/in/kishansingh"><Icon iconName={<i className="fa-brands fa-square-linkedin"></i>}/></Link></li>
            <li><Link href="https://www.behance.net/kishansingh"><Icon iconName={<i className="fa-brands fa-behance"></i>}/></Link></li>
            <li><Link href="https://www.github.com/kishansignh51"><Icon iconName={<i className="fa-brands fa-github"></i>}/></Link></li>
          </ul>
        </div>

      </div>
      <div className='sm:flex justify-between  min-h-24'>
        <p className='py-4 '>Copyright &copy 2025 Kishan</p>
        <hr className='border-t border-gray-500 ' />
        <Image alt={"About 4"} imageSrc={about3}  />
      </div>
    </div>
  )

}
function Icon({ iconName }) {
  return (
    <span className=" w-12 h-12 px-2 ">
      {iconName}
    </span>
  );
}

function Logo() {
  return (
    <p className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center py-2 md:p-6'>Lumora</p>
  )
}

function Link({ children, href }) {
  return (
   
      <a href={href} className="">
        {children}
      </a>
   
  )
}