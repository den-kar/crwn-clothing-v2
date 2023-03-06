// import { createContext, useReducer } from 'react';
// // import { createContext, useEffect, useState } from 'react';

// import { createAction } from '../utils/reducer/reducer.utils';

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// const addCartItem = (cartItems, productToAdd) => {
//   // find if cartItems contains productToAdd
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );
//   // if found, increment quantity
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === existingCartItem.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   // return new array with modified cartItems / new cart item
//   return [...cartItems, { ...productToAdd, quantity: 1 }];

//   // let newCart = [...cartItems];
//   // // find if cartItems contains productToAdd
//   // const index = newCart.map((item) => item.id).indexOf(productToAdd.id);
//   // // if found, increment quantity
//   // if (index >= 0) {
//   //   newCart[index].quantity += 1;
//   // } else {
//   //   newCart.push({ ...productToAdd, quantity: 1 });
//   // }
//   // // return new array with modified cartItems / new cart item
//   // return newCart;
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };

// const removeCartItem = (cartItems, cartItemToRemove, clear = false) => {
//   // if found, decrement quantity
//   if (!clear && cartItemToRemove.quantity > 1) {
//     // return
//     return cartItems.map((cartItem) =>
//       cartItem.id === cartItemToRemove.id
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//   }

//   return clearCartItem(cartItems, cartItemToRemove);
//   // return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// };

// // ===== Reducer
// export const CART_ACTION_TYPES = {
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//   const { isCartOpen, cartItems, cartCount, cartTotal } = state;

//   const setIsCartOpen = () => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen));
//     // dispatch({
//     //   type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
//     //   payload: !isCartOpen,
//     // });
//   };

//   const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     const newCartTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );
//     const payload = {
//       cartItems: newCartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal,
//     };
//     dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
//     // dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: payload });
//   };

//   const addItemToCart = (productToAdd) => {
//     updateCartItemsReducer(addCartItem(cartItems, productToAdd));
//   };

//   const removeItemFromCart = (cartItemToRemove) => {
//     updateCartItemsReducer(removeCartItem(cartItems, cartItemToRemove));
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     updateCartItemsReducer(clearCartItem(cartItems, cartItemToClear));
//   };

//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);
//   // const [cartCount, setCartCount] = useState(0);
//   // const [cartTotal, setCartTotal] = useState(0);

//   // useEffect(() => {
//   //   const newCartCount = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity,
//   //     0
//   //   );
//   //   setCartCount(newCartCount);
//   // }, [cartItems]);

//   // useEffect(() => {
//   //   const newCartTotal = cartItems.reduce(
//   //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//   //     0
//   //   );
//   //   setCartTotal(newCartTotal);
//   // }, [cartItems]);

//   // const addItemToCart = (productToAdd) => {
//   //   setCartItems(addCartItem(cartItems, productToAdd));
//   // };

//   // const removeItemFromCart = (cartItemToRemove) => {
//   //   setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   // };

//   // const clearItemFromCart = (cartItemToClear) => {
//   //   setCartItems(clearCartItem(cartItems, cartItemToClear));
//   //   // setCartItems(removeCartItem(cartItems, cartItemToClear, true));
//   // };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
