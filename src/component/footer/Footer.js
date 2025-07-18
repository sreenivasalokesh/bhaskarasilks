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
                        <br/>Phone: +91 12345 67890
                    </p> 
                </div>

                
                <div className="footer-links">
                    <p>Follow us on 
                    <div class="social-links">
                        <a href="https://facebook.com/yourpage" target="_blank" class="social-box fb">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com/yourpage" target="_blank" class="social-box insta">
                        <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/yourchannel" target="_blank" class="social-box yt">
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