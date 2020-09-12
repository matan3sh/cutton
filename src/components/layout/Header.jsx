import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearUser } from 'store/user/actions';
import { toggleCart } from 'store/cart/actions';
import { CartDropdown } from 'components/app/cart';

const Header = ({ clearUser, userAuth, userProfile, openCart, toggleCart }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='l-header'>
      <nav className='nav bd-grid'>
        <Link to='/' className='nav__logo'>
          <i className='fas fa-tshirt'></i> Cutton
        </Link>
        <div className={`nav__menu ${openMenu && 'show'}`}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink
                to='/'
                exact
                className='nav__link'
                activeClassName='active'
                onClick={() => setOpenMenu(false)}
              >
                Home
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                to='/shop'
                exact
                className='nav__link'
                activeClassName='active'
                onClick={() => setOpenMenu(false)}
              >
                Shop
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink
                to='/contact'
                exact
                className='nav__link'
                activeClassName='active'
                onClick={() => setOpenMenu(false)}
              >
                Contact
              </NavLink>
            </li>

            {userAuth && userProfile ? (
              <li className='nav__item'>
                <span className='nav__link'>{userProfile?.displayName}</span>
                <small onClick={() => clearUser()}>(Logout)</small>
              </li>
            ) : (
              <li className='nav__item'>
                <NavLink
                  to='/auth'
                  exact
                  className='nav__link'
                  activeClassName='active'
                  onClick={() => setOpenMenu(false)}
                >
                  Sign-In
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className='nav__cart'>
          <i
            className='fas fa-shopping-cart nav__cart'
            onClick={() => toggleCart()}
          ></i>
          <small>2</small>
          <i
            className='fas fa-bars nav__toggle'
            onClick={() => setOpenMenu(!openMenu)}
          ></i>
          {openCart && <CartDropdown />}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userAuth: state.auth.userAuth,
  userProfile: state.auth.userProfile,
  openCart: state.cart.openCart,
});

const mapDispatchToProps = {
  clearUser,
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
