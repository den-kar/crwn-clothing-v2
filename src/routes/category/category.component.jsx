import { /*useContext, */ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';
// import { setCategoriesMap } from '../../store/categories/categories.action';

// import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, CategoryTitle } from './category.styles';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
  const { category } = useParams();
  // console.log('render/re-rendering category');
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  // const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    // console.log('category.component setProducts fired');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CategoryContainer>
      )}
    </>
  );

  // return (
  //   <>
  //     <h2 className="category-title">{category}</h2>
  //     <div className="category-container">
  //       {products &&
  //         products.map((product) => (
  //           <ProductCard product={product} key={product.id} />
  //         ))}
  //     </div>
  //   </>
  // );
};

export default Category;
