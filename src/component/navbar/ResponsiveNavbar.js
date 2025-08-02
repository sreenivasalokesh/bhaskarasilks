import React, { useEffect, useState } from 'react';
import './ResponsiveNavbar.css'; 
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ResponsiveNavbar = () => {
  const [activeLink, setActiveLink] = useState('/home');
  const location = useLocation();
  const [navbarShrunk, setNavbarShrunk] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
    setNavbarShrunk(
      ['/about', '/services', '/gallery', '/contact'].includes(currentPath)
    );

  }, [location.pathname]);

  const handleOnClick = (path, isNavBarShrink) =>{
    setActiveLink(path); 
    setNavbarShrunk(isNavBarShrink);
  }

  return (
    <>
      <nav className={`navbar ${navbarShrunk ? 'shrunk' : ''}`}>
        <div className="mobile-header">
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className="logo">
            <Link to="/home" onClick={() => handleOnClick("/home", false)} className={activeLink === '/home' ? 'active navlink' : 'navlink'}>
              <img src="golden-log-first-big-letters.svg" alt="Logo" className="logo-image" />
            </Link>
          </div>
        </div>

        <div className="logo-container">
          <div className="logo box">
            <Link
              to="/home"
              onClick={() => {
                setActiveLink("/home");
                setNavbarShrunk(false);
              }}
              className={activeLink === '/home' ? 'active navlink' : 'navlink'}
            >
              <img src="golden-log-first-big-letters-2.svg" alt="Logo" className="logo-image" />
            </Link>
          </div>
          <div className="nav-links  box">
            <Link to="/home"  onClick={() => handleOnClick("/home", false)} className={activeLink === '/home' ? 'active navlink' : 'navlink'}>Home</Link>
            <Link to="/about"  onClick={() => handleOnClick("/about", true)} className={activeLink === '/about' ? 'active navlink' : 'navlink'}>About</Link>
            <Link to="/services" onClick={() => handleOnClick("/services", true)} className={activeLink === '/services' ? 'active navlink' : 'navlink'}>Services</Link>
            <Link to="/gallery" onClick={() => handleOnClick("/gallery", true)} className={activeLink === '/gallery' ? 'active navlink' : 'navlink'}>Gallery</Link>
            <Link to="/contact" onClick={() => handleOnClick("/contact", true)} className={activeLink === '/contact' ? 'active navlink' : 'navlink'}>Contact</Link>
          </div>
        </div>
      </nav>

      <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link
              to="/home"
              onClick={() => {
                setActiveLink("/home");
                setNavbarShrunk(false);
                closeMenu();
              }}
              className={activeLink === '/home' ? 'active navlink' : 'navlink'}
            >
             <img src="peacock-top-logo.svg" alt="Logo" className="logo-image" />
            </Link>
          {/* <div className="close-button" onClick={closeMenu}>&times;</div> */}
        </div>
        <nav className="drawer-nav">
          <Link to="/home" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
      {menuOpen && <div className="drawer-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default ResponsiveNavbar;