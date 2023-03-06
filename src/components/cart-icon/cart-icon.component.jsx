// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.action';
// import { toggleCartVisibility } from '../../store/cart/cart.action';
// import { selectCart } from '../../store/cart/cart.selector';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  CartItemCount,
  ShoppingIcon,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  // const { cartCount } = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  
  // const { cartCount, isCartOpen } = useSelector(selectCart);
  // console.log('cart', cart);
  // const { cartCount } = cart;
  // const { cartCount, /*isCartOpen, */setIsCartOpen } = useContext(CartContext);

  // const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  // const cartCount = cartItems.reduce(
  //   (prevValue, currValue) => prevValue + currValue.quantity,
  //   0
  // );

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
    {/* <CartIconContainer onClick={setIsCartOpen}> */}
    {/* <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}> */}
      <ShoppingIcon />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );

  // return (
  //   <div
  //     className="cart-icon-container"
  //     onClick={() => setIsCartOpen(!isCartOpen)}
  //   >
  //     <ShoppingIcon className="shopping-icon" />
  //     <span className="item-count">{cartCount}</span>
  //   </div>
  // );
};

export default CartIcon;
