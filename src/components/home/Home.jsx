import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container container'>
        <div className='home__content'>
          <span className='home__subtitle'>Welcome To The Broo!</span>
          <h1 className='home__title'>
          Crafting Moments, One Cup at a Time.
          </h1>
          <p className='home__description'>
          From the first aroma to the last sip, we invite you to share in the art of crafting 
          unforgettable memories over a cup of your favorite brew at our cozy cafe.
          </p>

          <div className='home__btns'>
            <a href='#reservation' className='btn home__btn'>
              Proceed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
