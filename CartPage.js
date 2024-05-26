// CartPage.js
import React from 'react';

const CartPage = () => {
  // Dummy cart data (replace with actual cart state)
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    // Add more cart items as needed
  ];

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
