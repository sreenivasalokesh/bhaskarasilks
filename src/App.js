import './App.css';
import HeroImage from './component/home/HeroImage';
import ResponsiveNavbar from './component/navbar/ResponsiveNavbar';
import About from './component/about/About';
import { Routes, Route } from 'react-router-dom';
import Service from './component/services/Services';
import Gallery from './component/gallery/Gallery';
import Contact from './component/contact/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App" >    
    <AnimatePresence mode="wait">
      <ResponsiveNavbar />
      
        <Routes>
          <Route path="/" element={<HeroImage />} />
          <Route path="/home" element={<HeroImage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
