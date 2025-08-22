import { About } from './pages/About'
import {BrowserRouter, Route, Routes, } from 'react-dom'; 
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {

  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/home" element={<Home />} />
      </Routes>
      <div className='h-20  '>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
