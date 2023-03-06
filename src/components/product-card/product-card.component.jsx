// import { useContext } from 'react';
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { CartContext } from '../../contexts/cart.context';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  // const { addItemToCart } = useContext(CartContext);

  // const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Card
      </Button>
    </ProductCardContainer>
  );

  // return (
  //   <div className="product-card-container">
  //     <img src={imageUrl} alt={name} />
  //     <div className="footer">
  //       <span className="name">{name}</span>
  //       <span className="price">{price}</span>
  //     </div>
  //     <Button buttonType="inverted" onClick={addProductToCart}>
  //       Add to Card
  //     </Button>
  //   </div>
  // );
};

export default ProductCard;
