import React, { useEffect, useState } from 'react';
import './ResponsiveNavbar.css'; 
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ResponsiveNavbar = () => {

  const [activeLink, setActiveLink] = useState('/home');
  const location = useLocation();
  const [navbarShrunk, setNavbarShrunk] = useState(true);

  useEffect(() => {
  const currentPath = location.pathname;
  setActiveLink(currentPath);
  setNavbarShrunk(currentPath == '/about' || currentPath == '/services' || currentPath == '/gallery' || currentPath == '/contact');
}, [location.pathname]);

  useEffect(() => {
    console.log("Active Link:", activeLink);
  }, [activeLink]);

  return (
    <>
    <nav  className={`navbar ${navbarShrunk ? 'shrunk' : ''}`}>
      <div className="logo-container">
            <div className="logo">
              <Link to="/home" onClick={()=>{{setActiveLink("/home"); setNavbarShrunk(false);}}}
                className={activeLink === '/home' ? 'active navlink' : 'navlink'} ><img src="goldenLogo2.svg" alt="Logo" className="logo-image"/></Link>
            </div>
            <div className="nav-links">
              <Link to="/home" onClick={()=>{{setActiveLink("/home"); setNavbarShrunk(false);}}}
                className={activeLink === '/home' ? 'active navlink' : 'navlink'} >Home</Link>
              <Link to="/about" onClick={()=>{setActiveLink("/about"); setNavbarShrunk(true);}}            
                className={activeLink === '/about' ? 'active navlink' : 'navlink'}>About</Link>
              <Link to="/services" onClick={()=>{setActiveLink("/services"); setNavbarShrunk(true);}}            
                className={activeLink === '/services' ? 'active navlink' : 'navlink'}>Services</Link>
            <Link to="/gallery" onClick={()=>{setActiveLink("/gallery"); setNavbarShrunk(true);}}
                className={activeLink === '/gallery' ? 'active navlink' : 'navlink'}>Gallery</Link>
            <Link to="/contact" onClick={()=>{setActiveLink("/contact"); setNavbarShrunk(true);}}
                className={activeLink === '/contact' ? 'active navlink' : 'navlink'}>Contact</Link>
            </div>
          </div>
        
    </nav>
    </>
  );
};

export default ResponsiveNavbar;
