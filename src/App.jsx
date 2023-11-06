import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Stats from './components/stats/Stats';
import Reservation from './components/reservation/Reservation';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart'; // Import the Cart component

function App() {
  // Define state to manage the shopping cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the shopping cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the shopping cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <>
      <Header />
      <Home />
      <Menu onAddToCart={addToCart} /> {/* Pass the addToCart function as a prop */}
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} /> {/* Pass the cartItems and removeFromCart function as props */}
      <Reservation />
      <Stats />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
