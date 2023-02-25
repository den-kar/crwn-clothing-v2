import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartCount: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];

  // let newCart = [...cartItems];
  // // find if cartItems contains productToAdd
  // const index = newCart.map((item) => item.id).indexOf(productToAdd.id);
  // // if found, increment quantity
  // if (index >= 0) {
  //   newCart[index].quantity += 1;
  // } else {
  //   newCart.push({ ...productToAdd, quantity: 1 });
  // }
  // // return new array with modified cartItems / new cart item
  // return newCart;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
