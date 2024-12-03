import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

const Cart = ({ cartItems }) => {
    console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p><strong>{item.name}</strong></p>
              <img src={item.image} alt={item.name} />
              <p>Price: <FaRupeeSign />{item.offerprice}</p>
              <p>Original Price: <s><FaRupeeSign />{item.originalPrice}</s></p>
            </div>
          ))}
          <p className="total-price">
            Total: <FaRupeeSign />
            {cartItems.reduce((total, item) => total + item.offerprice, 0)}
          </p>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};
export default Cart;