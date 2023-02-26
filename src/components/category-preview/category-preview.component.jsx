import ProductsCard from '../product-card/product-card.component';

import {
  CategoryPreviewBody,
  CategoryPreviewContainer,
  LinkToCategory,
} from './category-preview.styles';

const CategoryPreview = ({ title, prodocts }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <LinkToCategory to={title}>
          {title.toUpperCase()}
        </LinkToCategory>
      </h2>
      <CategoryPreviewBody>
        {prodocts
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductsCard product={product} key={product.id} />
          ))}
      </CategoryPreviewBody>
    </CategoryPreviewContainer>
  );

  // const navigate = useNavigate();

  // const goToCategoryHandler = () => navigate(title.toLowerCase());
  // return (
  //   <div className="category-preview-container">
  //     <h2>
  //       <Link className="title" to={title}>
  //         {title.toUpperCase()}
  //       </Link>
  //     </h2>
  //     <div className="preview">
  //       {prodocts
  //         .filter((_, idx) => idx < 4)
  //         .map((product) => (
  //           <ProductsCard product={product} key={product.id} />
  //         ))}
  //     </div>
  //   </div>
  // );
};

export default CategoryPreview;
