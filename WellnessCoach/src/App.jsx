import { Home } from './pages/Home'
import { About } from './pages/About'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'; 
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import Footer from './components/Footer';
import {Header} from './components/Header';
import { AppContext } from './context/color.context';


function App() {

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
    "--ast-global-color-0": "#5c8607",
    "--ast-global-color-1": "#70a309",
    "--ast-global-color-2": "#343f1e",
    "--ast-global-color-3": "#343f1e",
    "--ast-global-color-4": "#e3e9d8",
    "--ast-global-color-5": "#fdfaf1",
    "--ast-global-color-6": "rgba(53, 64, 31, 0.24)",
    "--ast-global-color-7": "#343f1e",
    "--ast-global-color-8": "#050505"
  }}>
    <Header />
     <Routes>
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/" element={<Home />} />
      </Routes>
      <div className='h-20  '>
        <Footer />
      </div>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default App
