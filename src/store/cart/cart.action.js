import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

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
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // if found, decrement quantity
  if (cartItemToRemove.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return clearCartItem(cartItems, cartItemToRemove);
};

// const updateCartItemsReducer = (newCartItems) => {
//   const newCartCount = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );
//   const newCartTotal = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );
//   return {
//     cartItems: newCartItems,
//     cartCount: newCartCount,
//     cartTotal: newCartTotal,
//   };
// };

export const setIsCartOpen = (cartIsOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, cartIsOpen);

export const addItemToCart = (cartItems, productToAdd) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    addCartItem(cartItems, productToAdd)
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    removeCartItem(cartItems, cartItemToRemove)
  );
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    clearCartItem(cartItems, cartItemToClear)
  );
};

// -----

// export const setIsCartOpen = (cartIsOpen) =>
//   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, cartIsOpen);

// export const toggleCartVisibility = () =>
//   createAction(CART_ACTION_TYPES.TOGGLE_CART_VISIBILITY, null);

// export const setCartItems = (newCartItems) =>
//   createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

// export const addItemToCart = (productToAdd) =>
//   createAction(CART_ACTION_TYPES.ADD_TO_CART, productToAdd);

// export const removeItemFromCart = (productToRemove) =>
//   createAction(CART_ACTION_TYPES.REMOVE_FROM_CART, productToRemove);

// export const clearItemFromCart = (productToClear) =>
//   createAction(CART_ACTION_TYPES.CLEAR_FROM_CART, productToClear);
