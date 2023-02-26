import {
  CartItemContainer,
  CartItemDetails,
  CartItemName,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );

  // return (
  //   <div className="cart-item-container">
  //     <img src={imageUrl} alt={`${name}`} />
  //     <div className="item-details">
  //       <span className="name">{name}</span>
  //       <span className="price">
  //         {quantity} x ${price}
  //       </span>
  //     </div>
  //   </div>
  // );
};

export default CartItem;
