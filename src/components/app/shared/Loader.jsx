import React from 'react';
import loading from 'assets/img/loading.gif';
const Loader = () => <img src={loading} alt='Loading...' style={loaderStyle} />;
const loaderStyle = {
  width: '400px',
  objectFit: 'contain',
  display: 'flex',
  margin: 'auto',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Loader;
