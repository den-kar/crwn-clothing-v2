import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/categories.action'
// import { fetchCategoriesAsync } from '../../store/categories/categories.action'
// import { setCategories } from '../../store/categories/categories.action'
// import { setCategoriesMap } from '../../store/categories/categories.action'

// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { ProductsContainer } from './shop.styles';

const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      dispatch(fetchCategoriesStart());
      // dispatch(fetchCategoriesAsync());
    })();
    // (async () => {
    //   const categoriesArray = await getCategoriesAndDocuments();
    //   dispatch(setCategories(categoriesArray));

    //   // const categoriesMap = await getCategoriesAndDocuments();
    //   // dispatch(setCategoriesMap(categoriesMap));
    // })();
  }, [dispatch]);
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;


// import { Fragment, useContext } from 'react';

// import { CategoriesContext } from '../../contexts/categories.context';

// import CategoryPreview from '../../components/category-preview/category-preview.component';
// // import ProductCard from '../../components/product-card/product-card.component';

// import './shop.styles.scss';

// // import SHOP_DATA from '../../shop-data.json';
// // console.log(SHOP_DATA);

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);
//   // console.log(categoriesMap);
//   return (
//     <div className="shop-container">
//       {Object.keys(categoriesMap).map((title) => (
//         <CategoryPreview
//           title={title}
//           prodocts={categoriesMap[title]}
//           key={title}
//         />
//       ))}
//       {/* <Fragment> */}
//       {/* {Object.keys(categoriesMap).map((title) => (
//         <Fragment key={title}>
//           <h2>{title}</h2>
//           <div className="products-container">
//             {categoriesMap[title].map((product) => (
//               <ProductCard product={product} key={product.id} />
//             ))}
//           </div>
//         </Fragment>
//       ))} */}
//       {/* <div className="products-container"> */}
//       {/* {products.map((product) => (
//         <ProductCard product={product} key={product.id} />
//       ))} */}
//       {/* {products.map(({ id, name, imageUrl }) => (
//       // {SHOP_DATA.map(({ id, name }) => (
//         <div key={id}>
//           <h1>{name}</h1>
//           <img src={imageUrl} alt={name} />
//         </div>
//       ))} */}
//       {/* </div> */}
//       {/* </Fragment> */}
//     </div>
//   );
// };

// export default Shop;
