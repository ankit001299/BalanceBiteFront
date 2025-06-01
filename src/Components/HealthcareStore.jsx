// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const products = [
//   { id: 1, name: 'Whey Protein', category: 'Proteins & Supplements', price: 2000 },
//   { id: 2, name: 'Creatine', category: 'Proteins & Supplements', price: 1500 },
//   { id: 3, name: 'Multivitamins', category: 'Daily Health Essentials', price: 800 },
//   { id: 4, name: 'Fish Oil', category: 'Daily Health Essentials', price: 1200 },
//   { id: 5, name: 'Muesli', category: 'Healthy Breakfast', price: 500 },
//   { id: 6, name: 'Oats', category: 'Healthy Breakfast', price: 600 },
// ];

// const HealthcareStore = () => {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate(); // Used to navigate to the checkout page

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const getTotalAmount = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleCheckout = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty. Add some products before proceeding to checkout.");
//       return;
//     }

//     navigate('/checkout', { state: { selectedMeals: cart, totalPrice: getTotalAmount() } });
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <Navbar/>
//       <h1>Welcome to the Healthcare Store</h1>

//       <div>
//         {products.map((product) => (
//           <div key={product.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ddd', display: 'inline-block' }}>
//             <h3>{product.name}</h3>
//             <p>Category: {product.category}</p>
//             <p>Price: ₹{product.price}</p>
//             <button onClick={() => addToCart(product)} style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>Add to Cart</button>
//           </div>
//         ))}
//       </div>

//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? <p>Your cart is empty</p> : (
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>{item.name} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}</li>
//           ))}
//         </ul>
//       )}

//       <h3>Total Amount: ₹{getTotalAmount()}</h3>
//       {cart.length > 0 && (
//         <button 
//           style={{ padding: '10px 15px', backgroundColor: '#ff9800', color: '#fff', border: 'none', cursor: 'pointer' }} 
//           onClick={handleCheckout}
//         >
//           Proceed to Checkout
//         </button>
//       )}
//       <Footer/>
//     </div>
//   );
// };

// export default HealthcareStore;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

const products = [
  { id: 1, name: 'Whey Protein', category: 'Proteins & Supplements', price: 2000 },
  { id: 2, name: 'Creatine', category: 'Proteins & Supplements', price: 1500 },
  { id: 3, name: 'Multivitamins', category: 'Daily Health Essentials', price: 800 },
  { id: 4, name: 'Fish Oil', category: 'Daily Health Essentials', price: 1200 },
  { id: 5, name: 'Muesli', category: 'Healthy Breakfast', price: 500 },
  { id: 6, name: 'Oats', category: 'Healthy Breakfast', price: 600 },
];

const HealthcareStore = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add some products before proceeding to checkout.");
      return;
    }

    const token = localStorage.getItem("token"); // Check if user is logged in
    if (!token) {
      navigate("/login", { state: { fromCheckout: true } }); // Redirect to login before checkout
    } else {
      navigate("/checkout", { state: { selectedMeals: cart, totalPrice: getTotalAmount() } });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Navbar />
      <h1>Welcome to the Healthcare Store</h1>

      <div>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '20px', padding: '10px', border: '1px solid #ddd', display: 'inline-block' }}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)} style={{ padding: '8px 12px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} - {item.quantity} x ₹{item.price} = ₹{item.quantity * item.price}</li>
          ))}
        </ul>
      )}

      <h3>Total Amount: ₹{getTotalAmount()}</h3>
      {cart.length > 0 && (
        <button 
          style={{ padding: '10px 15px', backgroundColor: '#ff9800', color: '#fff', border: 'none', cursor: 'pointer' }} 
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      )}
      <Footer />
    </div>
  );
};

export default HealthcareStore;
