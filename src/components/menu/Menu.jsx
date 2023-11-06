import React, { useState } from 'react';
import { menu } from '../../Data';
import './menu.css';

const Menu = ({ onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('12oz');

  const handleAddToCart = (item) => {
    onAddToCart({ ...item, size: selectedSize });
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <section className='menu section' id='menu'>
      <h2 className='section__title' data-title='Our Menu' style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', color: '#ff7f50' }}>
        Let's Check Our Menu
      </h2>

      <div className='menu__grid container grid'>
        {menu.map(({ id, img, title, description, sizes }) => {
          return (
            <div className='menu__item grid' key={id}>
              <div className='menu__img-wrapper'>
                <img src={img} alt='' className='menu__img' style={{ borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} />
              </div>

              <div className='menu__data'>
                <div>
                  <h3 className='menu__title' style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#dbc1ac' }}>{title}</h3>
                  <p className='menu__description' style={{ fontSize: '1rem', color: '#dbc1ac' }}>{description}</p>
                </div>

                <div className='menu__size-selector'>
                  {sizes.map(({ name }) => (
                    <button
                      key={name}
                      className={`menu__size-button ${
                        selectedSize === name ? 'active' : ''
                      }`}
                      onClick={() => handleSizeChange(name)}
                      style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', backgroundColor: '#6F4E37', color: '#fff', border: 'none', borderRadius: '5px', padding: '0.5rem 1rem', margin: '0.5rem 0', cursor: 'pointer' }}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                <span className='menu__price' style={{ fontSize: '1.2rem', color: '#dbc1ac', fontWeight: 'bold' }}>
                  ₱{sizes.find((size) => size.name === selectedSize)?.price}
                </span>

                <button
                  className='menu__add-to-cart' style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', backgroundColor: '#6F4E37', color: '#fff', border: 'none', borderRadius: '5px', padding: '0.5rem 1rem', margin: '0.5rem 0', cursor: 'pointer' }}
                  onClick={() =>
                    handleAddToCart({ id, title, price: sizes.find((size) => size.name === selectedSize)?.price })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;