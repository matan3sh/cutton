import React from 'react';

const Button = ({ type, title, onClick }) => {
  return (
    <button
      className='button'
      type={type ? type : ''}
      onClick={onClick ? onClick : ''}
    >
      {title}
    </button>
  );
};

export default Button;
