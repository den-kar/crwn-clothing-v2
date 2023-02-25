import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  setCart: () => [],
  isCartOpen: false,
  setIsCartOpen: () => false,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // const toggleCart = () => {
  //   setIsCartOpen(!isCartOpen);
  // }

  const addToCart = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  const value = { isCartOpen, setIsCartOpen, cart, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
