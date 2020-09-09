import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // eslint-disable-next-line
  const [navLinks, setNavLinks] = useState([
    'Home',
    'Featured',
    'New',
    'Subscribe',
  ]);
  const [activeLink, setActiveLink] = useState('Home');
  return (
    <div className='l-header'>
      <nav className='nav bd-grid'>
        <Link to='/' className='nav__logo'>
          Cutton
        </Link>
        <div className={`nav__menu ${openMenu && 'show'}`}>
          <ul className='nav__list'>
            {navLinks.map((link, index) => (
              <li className='nav__item' key={index}>
                <a
                  href={`#${link}`}
                  className={`nav__link ${activeLink === link ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink(link);
                    setOpenMenu(false);
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <i className='fas fa-shopping-cart nav__cart'></i>
          <i
            className='fas fa-bars nav__toggle'
            onClick={() => setOpenMenu(!openMenu)}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
