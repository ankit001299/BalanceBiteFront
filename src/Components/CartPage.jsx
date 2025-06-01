// CartPage.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import Navbar from "./Navbar";
import Footer from "./Footer";


const CartPage = () => {
  const { cart, getTotal } = useCart();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setRefresh(prev => prev + 1); // Trigger re-render
  }, [cart]);

  return (
    <div>
      <Navbar/>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${getTotal()}</p>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default CartPage;
