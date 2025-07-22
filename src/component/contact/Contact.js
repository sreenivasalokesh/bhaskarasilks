import './Contact.css'; 
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const pageVariants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};



const Contact = () => {
  useEffect(() => {
      document.title = 'Contact | Bhaskara Silks';
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
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </div>
    </div>   

    <div className='body'> 

      <div className='phone-container'>
        <div className='phone'>
          <h2>Phone</h2>
          <p>
            <span role="img" aria-label="phone" style={{marginRight: '8px'}}>📞</span>
            <a className ="a-underline" href="tel:+11234567890">+91 8088 7272 73</a>
          </p>
          <p>
            <span role="img" aria-label="phone" style={{marginRight: '8px'}}>📞</span>
            <a className ="a-underline"  href="tel:+11234567890">+91 9844 1888 97</a>
          </p>
          <p>
            <span role="img" aria-label="phone" style={{marginRight: '8px'}}>📞</span>
            <a className ="a-underline"  href="tel:+11234567890">+91 9242 3164 68</a>
          </p>
        </div>
      </div>

      <div className="dot-separator">  
          <span>•</span>
          <span>•</span>
          <span>•</span>
      </div>
        
      <div className='email-container'>
        <div className='email-area'>
          <h2>Email</h2>
          <p>
            <span role="img" aria-label="email" style={{marginRight: '8px'}}>✉️</span>
            <a className ="a-underline"  href="mailto:contact@bhaskarasilks.in">contact@bhaskarasilks.in</a>
          </p>
        </div>
      </div>

      <div className="dot-separator">  
          <span>•</span>
          <span>•</span>
          <span>•</span>
      </div>

      <div className='social-media-container'>
        <div className='social-media'>
          <h2>Follow Us</h2>
          <p>Stay connected with us on social media!</p>
          <div className="footer-links">
            <p>
              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61578302682246" target="_blank" className="social-box fb" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/bhaskarasilks/" target="_blank" className="social-box insta" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@BhaskaraSilks" target="_blank" className="social-box yt" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>    
            </p> 
          </div>
        </div>
      </div>

      
      <div className="dot-separator">  
          <span>•</span>
          <span>•</span>
          <span>•</span>
      </div>

      <div className='contact-container'>
        <div className='contact-info'>
          <h2>Get in Touch</h2>
          <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
        </div>       
      </div>  
      <form className='contact-form'>
        <div className='form-name-email'>
          <input className='form-element name' type='text' placeholder='Name' required />
          <input  className='form-element email' type='email' placeholder='Email' required/>
        </div>
        
        <textarea className="form-element textarea" placeholder='Please write your message ...' required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div> 
    <Footer/>
    </motion.div>
    </>
  )
}
export default Contact;