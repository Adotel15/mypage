// Import Swiper React components
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Slider';

import { PAGES } from '../helpers/Paginas.js';

import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Import own styles
import './SwiperC.css';

export const SwiperC = () => {

      const [ width , setWidth ] = useState()

      useEffect(() => {
       
        function handleResize() {
          setWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", handleResize);
     
        handleResize();
       
        return () => window.removeEventListener("resize", handleResize);

      }, []);
    

      

      return (
        <Swiper
          modules = {[ Navigation, Pagination, Keyboard, Autoplay ]}
          slidesPerView = {width > 700 ? 3 : 1 }
          navigation
          pagination = {{ clickable: true }}
          keyboard = {{ enabled: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
        >
        {PAGES.map(( page ) => (

            <SwiperSlide key = { page.id }>
                {
                ({ isNext }) => ( 
                  <div className = {isNext ? 'active slider-box' : 'slider-box' }>
                    <Slider 
                      pagina = { page }
                      isNext = { isNext }
                    />
                  </div> )
                }
            </SwiperSlide>

          )
        )}
        </Swiper>
      );
};