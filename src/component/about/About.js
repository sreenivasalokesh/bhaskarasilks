import React from 'react';
import './About.css'; 
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const About = () => {
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
        <p>Learn more about our mission, vision, and values.</p>
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
<br/>All designs are created in-house, allowing us to introduce <span class="highlight">Fresh styles</span> regularly while maintaining variety and continuity. <br/>We deliver<span class="highlight"> Fully finished products</span>, ready for sale, and ensure everything reaches on time. <br/>Since we are the manufacturers, we offer <span class="highlight">Competitive pricing</span> that helps our buyers get better value.</p>
          </div>
        </div>

        <div className="section whatwecare sectionreverse"> 
          <div className="section-image">
            <div className="section-image-inner">
              <img src="/aboutus-whatwedo.jpg" alt="What We Care" />
            </div>
          </div>
          <div className="section-content">
            <h2>What We Care</h2>
            
           <p> Our care values are built on the foundation of the 3 Cs <span class="highlight">Craft, Commitment, and Consistency</span>.
<br/>We deeply value trust, believing in building long-lasting relationships with our partners and customers.
<br/>We are committed to delivering high-quality, well-designed products, crafted using top-grade and sustainable materials.
<br/>Our objective is not just to supply exceptional products, but to do so responsibly, with a focus on sustainability and relationship continuity.
<br/>We also believe in the power of technology and innovation, and are actively working toward integrating them meaningfully to enhance product design, operations, and customer experience.</p>


          </div>
        </div>

      <div className='horizontal-section'>

        <div className="horizontal-section-content">
            <h2>Our Story</h2>            
            <p> 
              For over 60 years, our craft has been more than just a profession—it has been our kula kasubu, a sacred lineage of artistry passed down through generations. Our forefathers began their journey as humble weavers in the border villages of Tamil Nadu, eventually making their way to Bengaluru. What started at the loom has grown into a thriving enterprise with our own manufacturing units, a trusted network of suppliers, and dedicated vendors.
            </p>
        </div>

        <div className="horizontal-section-image">
            <div className="horizontal-section-image-inner">
              <img src="/aboutus-whatwedo.jpg" alt="What We Care" />
              <img src="/aboutus-whatwedo.jpg" alt="What We Care" />
              <img src="/aboutus-whatwedo.jpg" alt="What We Care" />
              <img src="/aboutus-whatwedo.jpg" alt="What We Care" />
            </div>
        </div>

        <div className="horizontal-section-content">                   
            <p>
Today, we specialize in every stage of saree creation—from intricate weaving and thoughtful designing to meticulous quality checks and elegant packaging. It’s a journey rooted in tradition and driven by passion, carrying forward the legacy of silk through time.
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