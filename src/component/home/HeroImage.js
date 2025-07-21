import React, { useEffect } from 'react';
import './Home.css';

const HeroImage = () => {
  useEffect(() => {
      document.title = 'Bhaskara Silks';
    }, []);

  return (
    
    <div className='wrapper'>
      <div className='rightPanel'>
        <div className='card'>
          <div className='text'>
           <span className='firstletter'>E</span> <span className='remainigFirst'>xpertly crafted, with a commitment to quality and a character that endures.</span>
           </div>
          <span className='companycontainer'>
            <span className='subtextcontainer'><span className='subtext'>Bhaskara Silks</span></span>
            <span className='sincecontainer'><span className='since'>Trusted Saree Manufacturers Since 1975 &nbsp;&nbsp;&nbsp;</span></span>
          </span>

          <span className='exploreusContainer'>
            <a  href="/about"  className='exploreusButton' > Explore Us&nbsp; <span  className='exploreusArrow'> &#8594; </span></a>
          </span>
        </div>
      </div>
    </div>
  );
};


export default HeroImage;

// Crafted by skilled artisans, committed to quality, and built on character that inspires trust.
//Expertly crafted with care and tradition, bound by a promise of unmatched quality and a character that earns lasting trust

//  <span className='first'><span className='firstletter'>C</span> <span className='remainigFirst'>rafted</span> by artisans. &nbsp;</span>
//             <br/>
//             <span className='second'><span className='firstletter'>C</span> <span className='remainigFirst'>ommitted</span> to quality. &nbsp;</span>
//             <br/>
//             <span className='third'><span className='special'><span className='firstletter'>C</span> <span className='remainigFirst'>haracter </span>&nbsp;that builds trust.</span></span>
         