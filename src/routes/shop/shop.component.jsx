import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

// import SHOP_DATA from '../../shop-data.json';
// console.log(SHOP_DATA);

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
      {/* {products.map(({ id, name, imageUrl }) => (
      // {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
          <img src={imageUrl} alt={name} />
        </div>
      ))} */}
    </div>
  );
};

export default Shop;
