import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { clearUser } from 'store/user/actions';
import { toggleCart } from 'store/cart/actions';

import { createStructuredSelector } from 'reselect';
import {
  selectCartItemsCount,
  selectCartItems,
  selectCartHidden,
} from 'store/cart/selectors';
import { selectCurrentUser, selectUserAuth } from 'store/user/selectors';

import { CartDropdown } from 'components/app/cart';

const Header = ({
  clearUser,
  userAuth,
  userProfile,
  cartOpen,
  toggleCart,
  cartItems,
  itemCount,
}) => {
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
          <small>{!cartItems.length ? '' : itemCount}</small>
          <i
            className='fas fa-bars nav__toggle'
            onClick={() => setOpenMenu(!openMenu)}
          ></i>
          {cartOpen && <CartDropdown />}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  userAuth: selectUserAuth,
  userProfile: selectCurrentUser,
  cartOpen: selectCartHidden,
  cartItems: selectCartItems,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = {
  clearUser,
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
