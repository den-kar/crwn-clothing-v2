import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

// import SHOP_DATA from '../../shop-data.json';
// console.log(SHOP_DATA);

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          prodocts={categoriesMap[title]}
          key={title}
        />
      ))}
    </>
  );
};

export default CategoriesPreview;
