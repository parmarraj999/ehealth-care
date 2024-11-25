import React from 'react';
import './home.css';
import Category from './homeComponents/Category';
import Blogpage from './homeComponents/blogpage';
import Review from './homeComponents/review';
import FreeService from './homeComponents/freeService';
import Carousel from './homeComponents/HomeSlider';

function Home() {
  return (
    <div className='home_container' >
      {/* <div className='home_header' >
          <img src='../../../../images/banner.jpg' />
      </div> */}
      <Carousel/>
      <Category/>
      <Blogpage/>
      <Review/>
      <FreeService/>
    </div>
  )
}

export default Home