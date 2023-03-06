// import { createContext, useEffect, useReducer } from 'react';
// // import { createContext, useEffect, useState } from 'react';

// import { createAction } from '../utils/reducer/reducer.utils';

// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangedListener,
// } from '../utils/firebase/firebase.utils';

// // actual value to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER',
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case 'SET_CURRENT_USER':
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in userReducer`);
//   }
// };

// // ===== REDUCER
// export const UserProvider = ({ children }) => {
//   // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   // const { currentUser } = state;
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     // dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
//   };
  
//   // const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       // console.log(user);
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// // // === WITHOUT REDUCER
// // export const UserProvider = ({ children }) => {
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const value = { currentUser, setCurrentUser };

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChangedListener((user) => {
// //       // console.log(user);
// //       if (user) {
// //         createUserDocumentFromAuth(user);
// //       }
// //       setCurrentUser(user);
// //     });
// //     return unsubscribe;
// //   }, []);

// //   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// // };
