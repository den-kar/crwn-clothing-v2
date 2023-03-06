import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

// -----

// const selectCartReducer = (state) => state.cart;

// export const selectCart = createSelector(
//   [selectCartReducer],
//   (cartSlice) => cartSlice
// );

// -----

// export const selectCartIsOpen = createSelector(
//   [selectCartReducer],
//   (cartSlice) => cartSlice.cartIsOpen
// );

// export const selectCartItems = createSelector(
//   [selectCartReducer],
//   (cartSlice) => cartSlice.cartItems
// );

// export const selectCartCount = createSelector(
//   [selectCartReducer],
//   (cartSlice) => cartSlice.cartCount
// );

// export const selectCategoriesMap = createSelector(
//   [selectCart],
//   (categories) => {
//     console.log('selectCategoriesMap fired');
//     return categories.reduce((acc, categoryData) => {
//       const { title, items } = categoryData;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {});
//   }
// );

// export const selectCategoriesMap = (state) => {
//   console.log('selectCategoriesMap fired');
//   return state.categories.categories.reduce((acc, categoryData) => {
//     const { title, items } = categoryData;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

// export const selectCategoriesMap = (state) => state.categories.categoriesMap;
