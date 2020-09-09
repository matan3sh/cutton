import React from 'react';

const NewsLetter = () => {
  return (
    <section className='newsletter section' id='Subscribe'>
      <div className='newsletter__container bd-grid'>
        <div className='newsletter__subscribed'>
          <h2 className='section-title'>OUR NEWSLETTER</h2>
          <p className='newsletter__description'>
            Promotion new products and sales. Directly to you
          </p>

          <form className='newsletter__form'>
            <input
              type='text'
              className='newsletter__input'
              placeholder='Enter your email'
            />
            <a href='#/' className='button'>
              SUBSCRIBE
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
