import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutCartTotal,
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>quantity</span>{' '}
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems &&
        cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
      <CheckoutCartTotal>Total: ${cartTotal}</CheckoutCartTotal>
    </CheckoutContainer>
  );

  // return (
  //   <div className="checkout-container">
  //     <div className="checkout-header">
  //       <div className="header-block">
  //         <span>product</span>
  //       </div>
  //       <div className="header-block">
  //         <span>description</span>
  //       </div>
  //       <div className="header-block">
  //         <span>quantity</span>{' '}
  //       </div>
  //       <div className="header-block">
  //         <span>price</span>
  //       </div>
  //       <div className="header-block">
  //         <span>remove</span>
  //       </div>
  //     </div>
  //     {cartItems &&
  //       cartItems.map((cartItem) => (
  //         <CheckoutItem cartItem={cartItem} key={cartItem.id} />
  //       ))}
  //     <span className="total">Total: ${cartTotal}</span>
  //   </div>
  // );
};

export default Checkout;
