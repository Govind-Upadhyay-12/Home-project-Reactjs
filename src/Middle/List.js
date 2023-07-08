import React from 'react';
import './List.css';
import img5 from '../images/r3.png';
import img6 from '../images/r2.png'
import img7 from'../images/r1.png'
import img8 from '../images/WhatsApp Image 2023-06-20 at 18.50.47.jpg'
import img9 from '../images/WhatsApp Image 2023-06-20 at 18.50.52.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function List() {
  const Arr = [
    {
      img: img5,
      heading: "$47,043",
      para: "Aliva Priva Jardin"
    },
    {
      img: img6,
      heading: "$67,043",
      para: "Asatti Garden City"
    },
    {
      img: img7,
      heading: "$37,043",
      para: "Ciralan purl Serong"
    },
    {
      img: img8,
      heading: "$107,043",
      para: "Alive Priva jardin"
    },
    {
        img: img9,
        heading: "$70,043",
        para: "Royal Govind"
      }
  ];

  return (
    
    
    <div className='All'>
      <Swiper  modules={[ Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {Arr.map((item,index) => (
        <SwiperSlide key={index}>
        <div className='collec'>
          <div className='image'>
            <img src={item.img} width={360} alt="House" className='img' />
          </div>
          <div className='money'>
            <h2>{item.heading}</h2>
          </div>
          <div className="data">
            <h1 className='nam'>{item.para}</h1>
          </div>
        </div>
        </SwiperSlide>
      ))}
     </Swiper>
    </div>
    
    
  );
}

export default List;
