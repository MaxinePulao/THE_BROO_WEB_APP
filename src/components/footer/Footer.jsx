import React from 'react';
import logo from '../../assets/logo.png';
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__grid container grid'>
        <div className='footer__content'>
          <a href='/' className='footer__logo'>
            <img src={logo} alt='' className='footer__logo-img' />
          </a>

          <p className='footer__description'>
            Feel free to contact us:
          </p>

          <ul className='footer__contact'>
            <li className='footer__contact-item'>
              <AiOutlinePhone className='icon' /> +69 991 234 5678
            </li>

            <li className='footer__contact-item'>
              <MdOutlineLocationOn className='icon' /> 546 GSIS Road Daang Bakal Guitnang Bayan 2 San Mateo Rizal , Guitnang Bayan II, Philippines, 1850
            </li>

            <li className='footer__contact-item'>
              <FaRegEnvelope className='icon' /> broo.coffeetea@gmail.com
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Quick Links</h3>

          <ul className='footer__links'>
            <li>
              <a href='#about' className='footer__link'>
                <FaCaretRight className='icon' />
                About Us
              </a>
            </li>

            <li>
              <a href='#menu' className='footer__link'>
                <FaCaretRight className='icon' />
                Menu
              </a>
            </li>

            <li>
              <a href='#reservation' className='footer__link'>
                <FaCaretRight className='icon' />
                Order Status
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Opening Hours</h3>

          <div className='footer__opening-hour'>
            <ul className='opening__hour-list'>
              <li className='opening__hour-item'>
                <span>Saturday:</span>
                <span>4pm - 12am</span>
              </li>

              <li className='opening__hour-item'>
                <span>Monday:</span>
                <span>4pm - 12am</span>
              </li>

              <li className='opening__hour-item'>
                <span>Tuesday:</span>
                <span>4pm - 12am</span>
              </li>

              <li className='opening__hour-item'>
                <span>Wednesday:</span>
                <span>4pm - 12am</span>
              </li>

              <li className='opening__hour-item'>
                <span>Thursday:</span>
                <span>4pm - 12am</span>
              </li>

              <li className='opening__hour-item'>
                <span>Friday:</span>
                <span>4pm - 12am</span>
              </li>

              <li className='opening__hour-item'>
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Newsletter</h3>

          <p className='footer__description'>
            Subscribe Our Newsletter To Get Latest Update And News
          </p>

          <form className='subscribe__form'>
            <input
              type='text'
              placeholder='Your Email'
              className='form__input subscribe__input'
            />
            <button className='btn btn--flex subscribe__btn' type='submit'>
              <FaRegEnvelope /> Subscribe Now
            </button>
          </form>

          <div className='footer__socials'>
            <h3 className='footer__social-follow'>Follow Us:</h3>

            <div className='footer__social-links'>
              <a href='/' className='footer__social-link'>
                <FaFacebookF />
              </a>

              <a href='/' className='footer__social-link'>
                <FaTwitter />
              </a>

              <a href='/' className='footer__social-link'>
                <FaLinkedinIn />
              </a>

              <a href='/' className='footer__social-link'>
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className='copyright-text'>
        © Copyright 2023 <span>The Broo</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
