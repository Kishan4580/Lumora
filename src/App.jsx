import { Home } from './pages/Home'
import { About } from './pages/About'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'; 
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import Footer from './components/Footer';
import {Layout} from './components/Layout';
import { ColorContext } from './context/color.context';


function App() {

  return (
    <BrowserRouter>
      <ColorContext.Provider value={{
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
    {/* <Header /> */}
     <Routes>
       <Route path="/about" element={<Layout ><About /> </Layout>} />
       <Route path="/services" element={<Layout ><Services /> </Layout>} />
       <Route path="/contact" element={<Layout ><Contact /> </Layout>} />
       <Route path="/" element={<Layout ><Home /> </Layout>} />
      </Routes>
      {/* <div className='h-20  '>
        <Footer />
      </div> */}
      </ColorContext.Provider>
    </BrowserRouter>
  )
}

export default App
