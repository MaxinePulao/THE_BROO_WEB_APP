import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './header.css';

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);

    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);

  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className="nav container">
        <a href="/" onClick={scrollTop} className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img" />
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#menu" className="nav__link">
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
