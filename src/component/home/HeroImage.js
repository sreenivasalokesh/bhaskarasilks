import React, { useEffect } from 'react';
const HeroImage = () => {
  useEffect(() => {
      document.title = 'Bhaskara Silks';
    }, []);

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    
    <div style={styles.wrapper}>
      <div style={styles.rightPanel}>
        <div style={styles.card}>
          <div style={styles.text}>
            <span style={styles.firstletter}>C</span> <span style={styles.remainigFirst}>rafted</span> by artisans. &nbsp;
            <span style={styles.firstletter}>C</span> <span style={styles.remainigFirst}>ommitted</span> to quality. &nbsp;
            <br/><span style={styles.special}><span style={styles.firstletter}>C</span> <span style={styles.remainigFirst}>haracter </span>&nbsp;that builds trust.</span>
          </div>
          <span style={styles.companycontainer}>
            <span style={styles.subtextcontainer}><span style={styles.subtext}>Bhaskara Silks</span></span>
            <span style={styles.sincecontainer}><span style={styles.since}>Trusted Saree Manufacturers Since 1975 &nbsp;&nbsp;&nbsp;</span></span>
          </span>

          <span style={styles.exploreusContainer}>
            <a
              href="/about"
              style={{
                ...styles.exploreusButton,
                ...(isHovered ? styles.exploreusButtonHover : {}),
                textDecoration: 'none',
                display: 'inline-block',
                color: isHovered ? 'white' : '#cea200', // Prevent blue color
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Us&nbsp;
              <span style={{
                display: 'inline-block',
                transition: 'transform 0.3s',
                transform: isHovered ? 'translateX(5px)' : 'none',
                fontWeight: 'bold',
              }}>
                &#8594;
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  exploreusContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    cursor: 'pointer',
    color: '#cea200',
    fontSize: '24px',
    fontWeight: '500',
    fontFamily: "'Cardo', Georgia, 'Times New Roman', serif",
    // margin: 'auto',
    // marginTop: '4rem',
    // alignSelf: 'flex-start',
     position: 'absolute',
    bottom: '160px',
    right: '150px',
  },
  exploreusButton:{
    padding: '0.5rem 2rem',
    borderRadius: '0.3rem',
    backgroundColor: 'transparent',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    border: '2px solid #cea200',
  },
  exploreusButtonHover: {
    backgroundColor: '#cea200',
    color: 'white',
  },
  wrapper: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(190deg, black 0%, rgba(216, 212, 212, 0) 30%), url('/hero-landscape.png')`,
  },

  rightPanel: {
    position: 'absolute',    
    boxSizing: 'border-box',
    // top: '14rem',
    right: 0,
    width: '52vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,  
    // backgroundColor: 'rgba(253, 244, 239, 0.9)',
  },

  card: {
    // backgroundColor: 'rgba(253, 244, 239, 0.75)',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center ',
    flexDirection: 'column',    
    borderRadius: '0.3rem',   
    marginTop: '1.2rem'
  },

  text: {
    fontFamily: "'Cardo', Georgia, 'Times New Roman', serif",
    // fontFamily: "'EB Garamond', serif",
    color: 'rgba(253, 244, 239, 0.6)', //#f8f4e3
    fontSize: '35px',
    fontWeight: '500',
    lineHeight: '1rem',
    zIndex: 2,
    verticalAlign: 'top',
  },

  firstletter: {
    fontSize: '78px',
    lineHeight: '1em',
    display: 'inline-block',
    marginRight: '-0.1em',
    color: '#cea200',
    zIndex: 2,
  },

  special:{
    display: 'flex',    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  

  remainigFirst:{
    borderBottom: '2px solid transparent',
  },

  companycontainer:{
    width: '85%',
    // fontFamily: "'Cardo', Georgia, 'Times New Roman', serif",
    fontFamily: "'EB Garamond', serif",
    color: 'rgba(253, 244, 239, 0.6)',
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '1.3em',
    zIndex: 2,
    verticalAlign: 'top',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', 
    marginTop: '1.5rem',
  },

  subtextcontainer:{    
    // marginTop: '3rem',
    display: 'flex',
    justifyContent: 'flex-end',   
  },

  subtext:{     
    display: 'inline-block',
    paddingRight: '5rem',
    paddingLeft: '5rem',
    borderBottom: '2px solid #cea200',
  },

  sincecontainer:{    
    display: 'flex',
    justifyContent: 'flex-end',   
  },

  since:{    
    fontSize: '16px',
  }

};

export default HeroImage;
