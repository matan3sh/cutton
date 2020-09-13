export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  let copiedCartItems = [...cartItems];
  let copiedCartItemToRemove = { ...cartItemToRemove };
  let index = copiedCartItems.findIndex(
    (item) => item.id === cartItemToRemove.id
  );
  if (copiedCartItemToRemove.quantity === 1) copiedCartItems.splice(index, 1);
  else copiedCartItemToRemove.quantity--;
  return copiedCartItems.map((item) =>
    item.id === copiedCartItemToRemove.id ? copiedCartItemToRemove : item
  );
};
