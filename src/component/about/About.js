import React, { useEffect, useState } from 'react';
import './About.css'; 
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const images = [
  '/about/warp.png',
  '/about/design.jpg',
  '/about/weaving.png',
  '/about/packaging.png'
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  useEffect(() => {
    document.title = 'About | Bhaskara Silks';
  }, []);

  

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
        <h1>About us</h1>
        <p>Excited to share what we do and who we are!</p>
      </div>
    </div>
    <div className="aboutcontainer"> 
      <div className="sections">
        <div className="section whatwedo"> 
          <div className="section-image">
            <div className="section-image-inner">
              <img src="/weave.jpg" alt="What We Care" />
            </div>
             
          </div>
          <div className="section-content">
            <h2>What We Do</h2>
            <p>We focus on the end customer, <span class="highlight">Designing sarees</span> that reflect their needs and preferences. <br/>Our products are primarily made from <span class="highlight">Soft silk or Art silk</span>, offering both beauty and comfort. <br/>We handle<span class="highlight"> Bulk orders</span> with consistency in <span class="highlight">quality</span> and timely delivery.
<br/>All designs are created in-house, allowing us to introduce <span class="highlight">Fresh styles</span> regularly while maintaining variety and continuity. <br/>We deliver<span class="highlight"> Fully finished products</span>, ready for sale, and ensure everything reaches on time. <br/>Our role as manufacturers allows us to offer <span class='highlight'>value-driven pricing</span> to our customers.</p>
          </div>
        </div>
        <div className="dot-separator">  
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
        <div className="section whatwecare sectionreverse"> 
          <div className="section-image">
            <div className="section-image-inner">
              <img src="/aboutus-whatwedo.jpg" alt="What We Care" />
            </div>
          </div>
          <div className="section-content">
            <h2>What We Care</h2>
            
           <p> Everything we do is guided by the 3 pillars of our value system: <span class='highlight'>Craft, Commitment, and Consistency</span>.
<br/>We deeply value trust, believing in building <span class='highlight'>long-lasting relationships</span> with our partners and customers.
<br/>We are committed to delivering <span class='highlight'>high-quality, well-designed</span> products, crafted using top-grade and sustainable materials.
<br/>Our objective is not just to supply exceptional products, but to do so responsibly, with a focus on <span class='highlight'>sustainability and relationship continuity.</span>
<br/>We also believe in the power of technology and innovation, and are actively working toward integrating them meaningfully to enhance product design, operations, and customer experience.</p>


          </div>
        </div>
      <div className="dot-separator">  
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </div>
      <div className='horizontal-section'>

        <div className="horizontal-section-content">
            <h2>Our Story</h2>            
            <p> 
              For over 60 years, our craft has been more than just a profession - a sacred lineage of artistry passed down through generations. Our forefathers began their journey as humble weavers in the border villages of Tamil Nadu, eventually making their way to Bengaluru. What started at the loom has grown into a thriving enterprise with our own manufacturing units, a trusted network of suppliers, and dedicated vendors.
            </p>
        </div>

        <div className="horizontal-section-image">
          <div className="horizontal-section-image-inner">
            
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`carousel-image ${index === currentIndex ? 'active' : 'hidden'}`}
              />
            ))}
          </div>

          {/* Arrows only for small screens */}
          <div className="carousel-arrows">
            <button onClick={goToPrevious}>‹</button>
            <button onClick={goToNext}>›</button>
          </div>
        </div>


             

        <div className="horizontal-section-content">                   
            <p>
Today, we specialize in every stage of saree creation—from thoughtful designing and intricate weaving to meticulous quality checks and elegant packaging. 
<br/><br/>It’s a journey rooted in tradition and driven by passion, carrying forward the legacy of silk through time. 
<br/><br/>We currently supply wholesalers and saree shops in Bengaluru and Andhra Pradesh. We're now looking to expand our service to more regions across Andhra, Tamil Nadu, and Northern India, reaching new partners, valued customers, and trusted retail networks. With great excitement, we look forward to new opportunities — guided by our belief that <span class='highlight'>the finest products deserve to be in the finest hands.</span>
            </p>
        </div>
      </div>
      </div>

    </div>
    
     <Footer/>
     </motion.div>
    </>
  );
};

export default About;