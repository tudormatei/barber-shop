import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { NavigationDots } from '../../components';
import { images } from '../../constants';
import './Home.css';

const Home = () => {
  const [traslateX, setTranslateX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [objectPercentage, setObjectPercentage] = useState(50);
  const [lastPercentage, setLastPercentage] = useState(0);
  const [nextPercentage, setNextPercentage] = useState(0);
  const maxDelta = window.innerWidth / 2;

  const handleMouseDown = (e) => {
    setStartPos(e.clientX);
    setLastPercentage(nextPercentage);
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if(!dragging) {return;}

    const position = startPos - e.clientX;
    let percentage = parseInt((position / maxDelta) * 100);
    percentage = percentage + lastPercentage;

    const max = 35;

    setObjectPercentage(Math.min(Math.max(percentage, 0), max) + 50);
    percentage = Math.min(Math.max(percentage, 0), max);
    setNextPercentage(percentage);

    setTranslateX(percentage);
  };

  const handleMouseUp = (e) => {
    setLastPercentage(nextPercentage);
    setDragging(false);
  };

  return (
    <div className="app">
      <div className='app__home'>
        <div className='app__home-landing' id='home'>
          <div className='app__home-content'>
            <div className='video-container'>
              <video 
                src={images.video}
                type='video/mp4'
                loop={true}
                controls={false}
                muted
                autoPlay
              />
            </div>
            <div className="video-cover">
              <div className='landing-text'>
                <h1 className='mb-4'>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet. Ea quis ipsam et omnis voluptas et enim iure ut molestias minus et dolor omnis est adipisci praesentium est fugit dolor. Et ducimus numquam et expedita voluptatem qui molestiae laboriosam.</p>
              </div>
            </div>
            <NavigationDots className='nav-dots' active={'home'}/>
          </div>
        </div>
        <div className='app__home-about' id='about'>
          <div className='app__home-content'>
            <div className='app__home-about-content'></div>
            <div className='about-text'>
                <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1]}}
              transition={{ duration: 0.5 }}
              className='about-div'
            >
              <h1>Lorem Ipsum</h1>
              <p className='my-2 bold-text'>About Us</p>
              <p>Lorem ipsum dolor sit amet. Ea quis ipsam et omnis voluptas et enim iure ut molestias minus et dolor omnis est adipisci praesentium est fugit dolor. Et ducimus numquam et expedita voluptatem qui molestiae laboriosam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum magna non est eleifend lacinia. Proin orci enim, convallis nec dapibus placerat, gravida id justo. Pellentesque nec dolor nec urna posuere placerat. Praesent luctus massa id purus efficitur, eget elementum nisl mollis. Nam ultricies euismod tortor, eleifend pharetra metus sollicitudin sed. Cras in convallis nibh. Sed viverra metus eget faucibus mollis. Vestibulum luctus fringilla feugiat.</p>
            </motion.div>
            </div>
            <NavigationDots  active={'about'}/>
          </div>
        </div>
        <div className='app__home-gallery' id='gallery'>
          <div className='app__home-content' onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onTouchMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className='app__home-gallery-content'>
            <motion.div
              whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1]}}
              transition={{ duration: 0.5 }}
            >
              <h1 className='gallery-title'>Preview</h1>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </motion.div>
              
              <div id='image-track' style={{ transform: `translateX(-${traslateX}%)` }}>
                <img className='image' style={{ objectPosition: `${objectPercentage}% 50%` }} src={images.img1} draggable='false'/>
                <img className='image' style={{ objectPosition: `${objectPercentage}% 50%` }} src={images.img2} draggable='false'/>
                <img className='image' style={{ objectPosition: `${objectPercentage}% 50%` }} src={images.img3} draggable='false'/>
                <img className='image' style={{ objectPosition: `${objectPercentage}% 50%` }} src={images.img4} draggable='false'/>
                <img className='image' style={{ objectPosition: `${objectPercentage}% 50%` }} src={images.img5} draggable='false'/>
              </div>
            </div>
            <NavigationDots active={'gallery'}/>
          </div>
        </div>
        <div className='app__home-pricing' id='pricing'>
          <div className='app__home-content'>
            <div className='app__home-about-content'>
              Pricing
            </div>
            <NavigationDots active={'pricing'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home