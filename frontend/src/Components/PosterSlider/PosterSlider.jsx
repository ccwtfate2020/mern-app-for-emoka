import React from 'react'
import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './PosterSlider.css'
import poster from '../Assets/poster'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PosterSlider = () => {
  return (
    <div className='posterslider'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        // className="posterslider-poster"
      >
      {poster.map((item,i)=>{
          return <SwiperSlide className="poster">
              <Link to={item.url} target="_blank">
                <img src={item.image} alt="" />
              </Link>
            </SwiperSlide>
      })}
      </Swiper>
    </div>
  )
}

export default PosterSlider