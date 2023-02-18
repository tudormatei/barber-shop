import React from 'react';

import './Gallery.css';
import { images } from '../../constants';

const Gallery = () => {
  return (
    <div className='app'>
      <div className='app__gallery'>
        <div className='gallery-slideshow'>
          <img src={images.img1} alt="Image 1"/>
          <img src={images.img2} alt="Image 2"/>
          <img src={images.img3} alt="Image 3"/>
          <img src={images.img4} alt="Image 4"/>
          <img src={images.img5} alt="Image 5"/>
          <img src={images.img6} alt="Image 6"/>
          <img src={images.img7} alt="Image 7"/>
          <img src={images.img8} alt="Image 8"/>
          <img src={images.img9} alt="Image 9"/>
          <img src={images.img10} alt="Image 10"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery