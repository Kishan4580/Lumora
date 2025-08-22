import { Image } from './pages/About.jsx'
import about3 from "../public/assets/footer/footer1.jpg"

export default function Footer() {
  return (
    <div>
      <div className=" sm:flex ">
        <div>
          <Logo></Logo>
          <p>Get news about our latest sale dates</p>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <Link href="#">About Us</Link>
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <Link href="#">Consulting</Link>
            <Link href="#">Therapy</Link>
            <Link href="#">Wellness Programs</Link>
          </ul>
        </div>


        <div>
          <h3>Address</h3>
          <ul>
            <li>123 Wellness St.</li>
            <li>Health City, HC 12345</li>
            <li>USA</li>
          </ul>
        </div>

      </div>
      <div>
        <p>Copyright &copy 2025 Kishan</p>
        <Image alt={"About 4"} imageSrc={about3} />
      </div>
    </div>
  )
}
function Logo() {
  return (
    <p className='text-7xl font-bold'></p>
  )
}

function Link({ children, href }) {
  return (
    <li>
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    </li>
  )
}