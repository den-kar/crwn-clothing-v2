import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import {
  CartDropdownContainer,
  CartDropdownEmpty,
  CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length > 0 ? cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        )) : (<CartDropdownEmpty>Your cart is empty</CartDropdownEmpty>)}
      </CartItemsContainer>
      {/* <Link to="/checkout"> */}
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
      {/* </Link> */}
    </CartDropdownContainer>
  );

  // return (
  //   <div className="cart-dropdown-container">
  //     <div className="cart-items">
  //       {cartItems.map((item) => (
  //         <CartItem cartItem={item} key={item.id} />
  //       ))}
  //     </div>
  //     {/* <Link to="/checkout"> */}
  //     <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
  //     {/* </Link> */}
  //   </div>
  // );
};

export default CartDropdown;
