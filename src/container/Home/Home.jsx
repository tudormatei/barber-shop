import React from 'react';

import { NavigationDots } from '../../components';
import { images } from '../../constants';
import './Home.css';

const Home = () => {
  return (
    <div className="app">
      <div className='app__home'>
        <div className='app__home-landing' id='home'>
          <div className='app__home-content'>
            <video 
              src={images.video}
              type='video/mp4'
              loop={true}
              controls={false}
              muted
              autoPlay
            />
            <NavigationDots className='nav-dots' active={'home'}/>
          </div>
        </div>
        <div className='app__home-about' id='about'>
          <div className='app__home-content'>
            <div className='app__home-about-content'>
              About
            </div>
            <NavigationDots  active={'about'}/>
          </div>
        </div>
        <div className='app__home-gallery' id='gallery'>
          <div className='app__home-content'>
            <div className='app__home-about-content'>
              Gallery
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