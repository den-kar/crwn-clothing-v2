// import { createContext, useEffect, useState } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// export const CategoriesContext = createContext({
//   categoriesMap: {},
//   setCategories: () => {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   useEffect(() => {
//     (async () => {
//       const categoriesMap = await getCategoriesAndDocuments();
//       // console.log(categoriesMap);
//       setCategoriesMap(categoriesMap);

//       // const CATEGORIES_KEYS = ['jackets', 'mens', 'sneakers', 'womens', 'hats'];
//       // const catMap = Object.keys(categoriesMap)
//       //   .filter((key) => CATEGORIES_KEYS.includes(key))
//       //   .reduce((obj, key) => {
//       //     obj[key] = categoriesMap[key];
//       //     return obj;
//       //   }, {});
//       // setCategoriesMap(catMap);
//     })();
//   }, []);

//   const value = { categoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };

// // import { createContext, useEffect, useState } from 'react';
// // // import { createContext, useEffect, useState } from 'react';

// // // import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';
// // import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// // // import PRODUCTS from '../shop-data.json';
// // // console.log(PRODUCTS);
// // // import SHOP_DATA from '../shop-data.js';

// // export const ProductsContext = createContext({
// //   products: [],
// //   setProducts: () => [],
// // });

// // // const fetchData = () => {
// // //   return PRODUCTS;
// // // };

// // export const ProductsProvider = ({ children }) => {
// //   const [products] = useState([]);
// //   // useEffect(() => {
// //   //   addCollectionAndDocuments('categories', SHOP_DATA);
// //   // }, []);
// //   useEffect(() => {
// //     (async () => {
// //       const categoryMap = await getCategoriesAndDocuments();
// //       console.log(categoryMap);
// //     })();
// //   }, []);

// //   // const [products] = useState(fetchData());
// //   const value = { products };

// //   // const [products, setProducts] = useState([]);
// //   // const value = { products, setProducts };

// //   // useEffect(() => {
// //   //   const data = fetchData();
// //   //   setProducts(data);
// //   // }, []);

// //   return (
// //     <ProductsContext.Provider value={value}>
// //       {children}
// //     </ProductsContext.Provider>
// //   );
// // };
