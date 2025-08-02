import './Gallery.css'; 
import Footer from '../footer/Footer';
// import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const pageVariants = {
  initial: { opacity: 1, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// const breakpointColumnsObj = {
//   default: 3,
//   1100: 3,
//   700: 2,
//   500: 1
// };

const mediaItems = [
  { id: 0, type: "image", src: "/gallery/gallery-0.jpg" },
  { id: 1, type: "image", src: "/gallery/gallery-1.jpg" },
  { id: 2, type: "image", src: "/gallery/gallery-2.jpg" },
  { id: 3, type: "image", src: "/gallery/gallery-3.jpg" },
  { id: 4, type: "image", src: "/gallery/gallery-4.jpg" },
  { id: 5, type: "image", src: "/gallery/gallery-5.jpg" },
  { id: 6, type: "image", src: "/gallery/gallery-6.jpg" },
  { id: 7, type: "image", src: "/gallery/gallery-7.jpg" },
  { id: 8, type: "image", src: "/gallery/gallery-8.jpg" },
  { id: 9, type: "image", src: "/gallery/gallery-9.jpg" },

  // ...more items
];

const images = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  src: `/gallery/gallery-${i}.jpg`, 
}));

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openViewer = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
      document.title = 'Gallery | Bhaskara Silks';
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
        <h1>Gallery</h1>
        <p>Some of our collections.</p>
      </div>
    </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
    {mediaItems.map((img, index) => (
      <div key={img.id} onClick={() => openViewer(index)} className="grid-item" >
        <img src={img.src} alt={`img-${img.id}`} className="gallery-img" />
      </div>
    ))}
  </Masonry>

  <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={selectedIndex}
        slides={mediaItems}
        plugins={[Thumbnails, Fullscreen, Video]}
      />
    <Footer/>
    </motion.div>
    </>
  )
}
export default Gallery;