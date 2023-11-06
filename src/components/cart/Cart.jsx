import React from 'react';
import { Link } from 'react-scroll';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#634832',
    color: 'white',
  };

  const cartStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div className="cart" style={cartStyle}>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price.toFixed(2)} ({item.size})
            <button style={buttonStyle} onClick={() => onRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total Price: ₱{calculateTotalPrice().toFixed(2)}</p>
      <Link to="testimonials" smooth={true} duration={500}>
        <button style={buttonStyle}>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;