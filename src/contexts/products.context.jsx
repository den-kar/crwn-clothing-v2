import { createContext, useState } from 'react';
// import { createContext, useEffect, useState } from 'react';

import PRODUCTS from '../shop-data.json';
console.log(PRODUCTS);

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

const fetchData = () => {
  return PRODUCTS;
};

export const ProductsProvider = ({ children }) => {
  const [products] = useState(fetchData());
  const value = { products };

  // const [products, setProducts] = useState([]);
  // const value = { products, setProducts };

  // useEffect(() => {
  //   const data = fetchData();
  //   setProducts(data);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
