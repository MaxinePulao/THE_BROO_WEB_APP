import React from 'react';
import coffeeShop from '../../assets/coffee-shop.svg';
import experience from '../../assets/experience.svg';
import coffeeCup from '../../assets/coffee-cup.svg';
import chef from '../../assets/chef.svg';
import './stats.css';

const Stats = () => {
  return (
    <section className='stats section'>
      <div className='stats__grid container grid'>
        <div className='stats__item'>
          <div className='stats__img-wrapper'>
            <img src={coffeeShop} alt='' className='stats__img' />
          </div>

          <div>
            <p className='stats__no'>1</p>
            <h3 className='stats__title'>+ Coffee Shop</h3>
          </div>
        </div>

        <div className='stats__item'>
          <div className='stats__img-wrapper'>
            <img src={coffeeCup} alt='' className='stats__img' />
          </div>

          <div>
            <p className='stats__no'>250</p>
            <h3 className='stats__title'>+ Happy Customers</h3>
          </div>
        </div>

        <div className='stats__item'>
          <div className='stats__img-wrapper'>
            <img src={chef} alt='' className='stats__img' />
          </div>

          <div>
            <p className='stats__no'>2</p>
            <h3 className='stats__title'>Baristas</h3>
          </div>
        </div>

        <div className='stats__item'>
          <div className='stats__img-wrapper'>
            <img src={experience} alt='' className='stats__img' />
          </div>

          <div>
            <p className='stats__no'>∞</p>
            <h3 className='stats__title'>Love for Coffee</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
