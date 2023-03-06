// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { CartContext } from '../../contexts/cart.context';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemImageContainer,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQuantity,
  CheckoutItemQuantityArrow,
  CheckoutItemQuantityValue,
  CheckoutItemRemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, price, quantity } = cartItem;
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);

  const addItemCountHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemCountHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  // const addItemCountHandler = () => addItemToCart(cartItem);
  // const removeItemCountHandler = () => removeItemFromCart(cartItem);
  // const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt={name} />
      </CheckoutItemImageContainer>
      <CheckoutItemName>{name}</CheckoutItemName>
      <CheckoutItemQuantity>
        <CheckoutItemQuantityArrow onClick={removeItemCountHandler}>
          &#10094;
        </CheckoutItemQuantityArrow>
        <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
        <CheckoutItemQuantityArrow onClick={addItemCountHandler}>
          &#10095;
        </CheckoutItemQuantityArrow>
      </CheckoutItemQuantity>
      <CheckoutItemPrice>{price}</CheckoutItemPrice>
      <CheckoutItemRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );

  // return (
  //   <div className="checkout-item-container">
  //     <div className="image-container">
  //       <img src={imageUrl} alt={name} />
  //     </div>
  //     <span className="name">{name}</span>
  //     <span className="quantity">
  //       <div className="arrow" onClick={removeItemCountHandler}>
  //         &#10094;
  //       </div>
  //       <span className="value">{quantity}</span>
  //       <div className="arrow" onClick={addItemCountHandler}>
  //         &#10095;
  //       </div>
  //     </span>
  //     <span className="price">{price}</span>
  //     <div className="remove-button" onClick={clearItemHandler}>
  //       &#10005;
  //     </div>
  //   </div>
  // );
};

export default CheckoutItem;
