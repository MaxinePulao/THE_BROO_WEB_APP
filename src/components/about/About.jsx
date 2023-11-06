import React from 'react';
import aboutImg from '../../assets/about-img.png';
import { FiCheck } from 'react-icons/fi';
import './about.css';

const About = () => {
  return (
    <section className='about section' id='about'>
      <div className='about__grid container grid'>
        <div className='about__img-wrapper'>
          <img src={aboutImg} alt='' className='about__img' />
        </div>

        <div className='about__content'>
          <h2 className='section__title title-left' data-title='About Us'>
          Crafted with Love, Brewed to Perfection
          </h2>

          <p className='about__description'>
          Experience the art of coffee at its finest, where every beverage is meticulously crafted with love and precision to deliver a truly exceptional taste.
          </p>

          <div className='about__details grid'>
            <p className='about__details-description'>
              <FiCheck />
              The secret ingredient in every cup at our cafe is love. 
            </p>

            <p className='about__details-description'>
              <FiCheck />
              Come and taste the difference, where your coffee is crafted with care and served with a smile.
            </p>

            <p className='about__details-description'>
              <FiCheck />
              Your journey to coffee perfection begins here!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
