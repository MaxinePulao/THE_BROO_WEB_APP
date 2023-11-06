import React, { useState, useEffect } from 'react';
import { testimonials } from '../../Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { VscTriangleDown } from 'react-icons/vsc';
import './testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <section className='testimonials container section' id='testimonials'>
      <h2 className='section__title' data-title='...'>
        Order Status
      </h2>

      <div className='centered-testimonial'>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className='testimonial__item'>
            <div
              className={`testimonial__qoute ${
                activeIndex === 0 ? 'highlighted' : ''
              }`}
            >
              <p className='testimonial__description'>
                {testimonials[activeIndex].description}
              </p>
              <VscTriangleDown className='testimonial__icon' />
            </div>

            <div className='testimonial__content'>
              <div className='testimonial__img-wrapper'>
                <img
                  src={testimonials[activeIndex].img}
                  alt=''
                  className='testimonial__img'
                />
              </div>

              <div>
                <h3 className='testimonial__title'>
                  {testimonials[activeIndex].title}
                </h3>
                <p className='testimonial__service'>
                  {testimonials[activeIndex].service}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
