import React from 'react';

const Button = ({ type, title }) => {
  return (
    <button className='button' type={type ? type : ''}>
      {title}
    </button>
  );
};

export default Button;
