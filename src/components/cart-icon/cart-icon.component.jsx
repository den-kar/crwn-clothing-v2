import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

  // const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  // const cartCount = cartItems.reduce(
  //   (prevValue, currValue) => prevValue + currValue.quantity,
  //   0
  // );
  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
