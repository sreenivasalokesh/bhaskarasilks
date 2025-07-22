import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <footer className="footer"> 
            <div className="footer-content">
                <img src="/footer-logo-gold.svg" alt="Bhaskara Silks Logo" className="footer-logo" />
                <div className="footer-address">
                    <p>479, 12th cross, Chaithanyanagara, Doddaballapura, Bengaluru, Karnataka 561203
                        <br/>Phone: +91 8088 7272 73, +91 9844 1888 97, +91 9242 3164 68
                        <br/>Email: <a href="mailto:contact@bhaskarasilks.in" className="a-underline"> contact@bhaskarasilks.in</a>

                    </p> 
                </div>

                
                <div className="footer-links">
                    <p>Follow us on 
                    <div class="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61578302682246" target="_blank" class="social-box fb">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/bhaskarasilks/" target="_blank" class="social-box insta">
                        <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@BhaskaraSilks" target="_blank" class="social-box yt">
                        <i class="fab fa-youtube"></i>
                        </a>
                        </div>    
                    </p> 
                      
                </div>     
            </div>
            <div className="footer-copyright">
                <p>&copy; 2025 Bhaskara Silks. All rights reserved.</p>
            </div>
                
        </footer>
    
    </>
  )
};

export default Footer;