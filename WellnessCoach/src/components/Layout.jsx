import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"
export function Layout({children}) {
    return (
        <div>
            {/* <h1 className="text-center">Header</h1> */}
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>

    )
}