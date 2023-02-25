import { useContext } from 'react';

import Button from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items"></div>
      {cart.map((product) => <h1>{product}</h1>)}
      <Button>Go To Checkout</Button>

    </div>
  )
}

export default CartDropdown;
