import './Services.css'; 
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Service = () => {
  return (
    <>
    <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
    <div className='header'>
      <div className='header-content'>
        <h1>Our Services</h1>
        <p>Learn more about our services.</p>
      </div>      
    </div>

    <div className='service-container'>
        <div className='service-list'>
            <ul>
                <li><span className='title'>High-Quality Assurance</span><br/>We guarantee top-notch craftsmanship and premium finishes in every saree we deliver.</li>
                <li><span className='title'>Exclusive Art Silk Collections</span><br/>A wide selection of in-house designed Art Silk sarees that reflect elegance and comfort.</li>
                <li><span className='title'>Authentic & Trendsetting Designs</span><br/>Designs that blend tradition with modern aesthetics to keep you ahead of the curve.</li>
                <li><span className='title'>Design Partnership & Customization</span><br/>We welcome collaborative design efforts and offer customization tailored to your needs.</li>
                <li><span className='title'>Well-Finished Products</span><br/>Every saree is carefully inspected to ensure it’s ready for retail with flawless finishing.</li>
                <li><span className='title'>Logistics & Delivery</span><br/>Reliable delivery partners and efficient logistics for on-time order fulfillment.</li>
                <li><span className='title'>Sustainable Yarn Usage</span><br/>Eco-conscious materials and processes for a greener future.</li>
                <li><span className='title'>Innovation & Technology</span><br/>We embrace modern tools and tech to enhance quality, creativity, and consistency.</li>
            </ul>
        </div>
    </div>
    <Footer/>
    </motion.div>
    </>
  )}

  export default Service;