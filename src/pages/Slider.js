import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import './Slider.css'
import { juegosSlider } from '../data/juegosData'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <Swiper
      style={{ paddingTop: '80px' }}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 7000
      }}
      pagination={{ clickable: true }}
    >
      {juegosSlider?.map((data) => (
        <SwiperSlide key={data.id} style={{ backgroundColor: '#0c3f65' }}>
          <Link to={`/games/${data.id}`}>
            <div className='card-slider' onClick={() => console.log(data.id)}>
              <div className='bg-image-slider'>
                <img className='slider-image' src={data.image} alt={data.nombre} />
              </div>
              <div className='card-slider-info'>
                <h1>{data.nombre}</h1>
                <p style={{ marginTop: '16px' }}>{data.descripcion}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider