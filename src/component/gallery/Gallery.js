import './Gallery.css'; 
import Footer from '../footer/Footer';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};


const images = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: `/gallery/gallery-${i}.jpg`, 
}));

const Gallery = () => {
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
        <h1>Gallery</h1>
        <p>Some of our collections.</p>
      </div>
    </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
    {images.map((img) => (
      <div key={img.id}>
        <img src={img.src} alt={`img-${img.id}`} className="gallery-img" />
      </div>
    ))}
  </Masonry>
    <Footer/>
    </motion.div>
    </>
  )
}
export default Gallery;