import React from 'react';

import footerstore1 from 'assets/img/footerstore1.png';
import footerstore2 from 'assets/img/footerstore2.png';

const Footer = () => {
  return (
    <section className='footer section'>
      <div className='footer__container bd-grid'>
        <div className='footer__box'>
          <h3 className='footer__title'>Cutton</h3>
          <p className='footer__deal'>Shopping Store</p>
          <a href='#/'>
            <img src={footerstore1} alt='' className='footer__store' />
          </a>
          <a href='#/'>
            <img src={footerstore2} alt='' className='footer__store' />
          </a>
        </div>

        <div className='footer__box'>
          <h3 className='footer__title'>EXPLORE</h3>
          <ul>
            <li>
              <a href='#Home' className='footer__link'>
                Home
              </a>
            </li>
            <li>
              <a href='#Featured' className='footer__link'>
                Featured
              </a>
            </li>
            <li>
              <a href='#New' className='footer__link'>
                New
              </a>
            </li>
            <li>
              <a href='#Subscribe' className='footer__link'>
                Subscribe
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__box'>
          <h3 className='footer__title'>OUR SERVICES</h3>
          <ul>
            <li>
              <a href='#/' className='footer__link'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#/' className='footer__link'>
                Free Shipping
              </a>
            </li>
            <li>
              <a href='#/' className='footer__link'>
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__box'>
          <h3 className='footer__title'>FOLLOW</h3>
          <a href='#/' className='footer__social'>
            <i className='fab fa-facebook-square'></i>
          </a>
          <a href='#/' className='footer__social'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#/' className='footer__social'>
            <i className='fab fa-twitter-square'></i>
          </a>
        </div>
      </div>

      <p className='footer__copy'>&#169; 2020 copyright all right reserved</p>
    </section>
  );
};

export default Footer;
