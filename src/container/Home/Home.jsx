import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { NavigationDots } from '../../components';
import { images } from '../../constants';
import './Home.css';

const Home = () => {
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
          <div className='app__home-content'>
            <div className='app__home-gallery-content'>
              <div>
                <h1 className='bold-text'>Preview</h1>
                <p className='mb-4'>Lorem ipsum dolor sit amet,  consectetur adipiscing elit</p>
              </div>
              <motion.div
              whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1]}}
              transition={{ duration: 0.5 }}
              id='image-track'
            >
              <img className='image' src={images.img1} draggable='false'/>
                <img className='image' src={images.img2} draggable='false'/>
                <img className='image' src={images.img3} draggable='false'/>
                <img className='image' src={images.img4} draggable='false'/>
                <img className='image' src={images.img5} draggable='false'/>
            </motion.div>            
            </div>
            <NavigationDots active={'gallery'}/>
          </div>
        </div>
        <div className='app__home-offers' id='offers'>
          <div className='app__home-content'>
            <div className='app__home-about-content'>
              <div className='offer-text'>
                    <motion.div
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1]}}
                  transition={{ duration: 0.5 }}
                  className='offer-div'
                >
                  <h1 className='bold-text mb-5'>What we offer</h1>
                  <div className='offer-item'>
                    <img src={images.scrissor}></img>
                    <div>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet,  consectetur adipiscing eliLorem ipsum dolor sit amet,  consectetur adipiscing eliLorem ipsum dolor sit amet,  consectetur adipiscing eli</p>
                    </div>
                  </div>
                  <div className='offer-item'>
                    <img src={images.paintBucket}></img>
                    <div>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet,  consectetur adipiscing eliLorem ipsum dolor sit amet,  consectetur adipiscing eliLorem ipsum dolor sit amet,  consectetur adipiscing eli</p>
                    </div>
                  </div>
                  <div className='offer-item'>
                    <img src={images.beard}></img>
                    <div>
                      <h4>Lorem ipsum</h4>
                      <p>Lorem ipsum dolor sit amet,  consectetur adipiscing eliLorem ipsum dolor sit amet,  consectetur adipiscing eliLorem ipsum dolor sit amet,  consectetur adipiscing eli</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <NavigationDots active={'offers'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home