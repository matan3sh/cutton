import React from 'react';

import logo1 from '../../../../assets/img/logo1.png';
import logo2 from '../../../../assets/img/logo2.png';
import logo3 from '../../../../assets/img/logo3.png';
import logo4 from '../../../../assets/img/logo4.png';

const Sponsers = () => {
  return (
    <section className='sponsers section'>
      <div className='sponsers__container bd-grid'>
        <div className='sponsers__logo'>
          <img src={logo1} alt='' />
        </div>
        <div className='sponsers__logo'>
          <img src={logo2} alt='' />
        </div>
        <div className='sponsers__logo'>
          <img src={logo3} alt='' />
        </div>
        <div className='sponsers__logo'>
          <img src={logo4} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
