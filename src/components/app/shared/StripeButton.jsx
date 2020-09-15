import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HRXGzGNaUEex20ysQA9pw5xOQFIp9Tj9AmJLwaYyWpyFhpYrob3J8EvB4JgteOjuXtimKAasLdEd8XB1sS9JEhu00uydnxXAv';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Cutton Shop'
      billingAddress
      shippingAddress
      image='https://img.artsadd.com/data/user/design/20150509/A9FD9BD5AB4B8F308CF5515BD2B7D675_500x500.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
