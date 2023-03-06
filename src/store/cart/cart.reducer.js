import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      }
    default:
      return state;
  }
};

// -----

// const INITIAL_CART_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

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
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // if found, decrement quantity
//   if (cartItemToRemove.quantity > 1) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === cartItemToRemove.id
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//   }
//   return clearCartItem(cartItems, cartItemToRemove);
// };

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

// export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     // case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//     //   return {
//     //     ...state,
//     //     isCartOpen: payload,
//     //   }
//     case CART_ACTION_TYPES.TOGGLE_CART_VISIBILITY:
//       return {
//         ...state,
//         isCartOpen: !state.isCartOpen,
//       }
//     // case CART_ACTION_TYPES.SET_CART_ITEMS:
//     //   return {
//     //     ...state,
//     //     ...payload,
//     //   }
//     case CART_ACTION_TYPES.ADD_TO_CART:
//       return {
//         ...state,
//         ...updateCartItemsReducer(addCartItem(state.cartItems, payload)),
//       }
//     case CART_ACTION_TYPES.REMOVE_FROM_CART:
//       return {
//         ...state,
//         ...updateCartItemsReducer(removeCartItem(state.cartItems, payload)),
//       }
//     case CART_ACTION_TYPES.CLEAR_FROM_CART:
//       return {
//         ...state,
//         ...updateCartItemsReducer(clearCartItem(state.cartItems, payload)),
//       }
//     default:
//       return state;
//   }
// };
