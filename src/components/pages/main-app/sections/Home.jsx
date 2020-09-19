import React from 'react';
import { connect } from 'react-redux';

import home from 'assets/img/home.png';

const Home = () => {
  return (
    <section className='home'>
      <div className='home__container bd-grid'>
        <div className='home__data'>
          <h1 className='home__title'>
            NEW <br />
            <span>ARRIVALS</span>
          </h1>
          <a href='#New' className='button'>
            GO SHOPPING
          </a>
        </div>
        <img src={home} alt='' className='home__img' />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
