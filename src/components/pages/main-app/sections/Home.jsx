import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import home from '../../../../assets/img/home.png';

const Home = () => {
  return (
    <section className='home' id='Home'>
      <div className='home__container bd-grid'>
        <div className='home__data'>
          <h1 className='home__title'>
            NEW <br />
            <span>ARRIVALS</span>
          </h1>
          <Link to='/shop' className='button'>
            GO SHOPPING
          </Link>
        </div>
        <img src={home} alt='' className='home__img' />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
