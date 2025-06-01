import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedMeals = [], totalPrice = 0 } = location.state || {};

  return (
    <div style={styles.cartContainer}>
      <h3 style={styles.cartTitle}>Your Shopping Cart</h3>

      {selectedMeals.length === 0 ? (
        <p style={styles.cartEmpty}>Your cart is empty.</p>
      ) : (
        <ul style={styles.cartItems}>
          {selectedMeals.map((item, index) => (
            <li key={index} style={styles.cartItem}>
              <span style={styles.itemText}>{item.name}</span>
              <span style={styles.itemText}>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}

      <h4 style={styles.cartTotal}>Total: ₹{totalPrice}</h4>

      {/* Buy Now Button */}
      <button 
        onClick={() => navigate("/checkout", { state: { selectedMeals, totalPrice } })} 
        style={styles.buyNowBtn}
      >
        Buy Now
      </button>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  cartContainer: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  cartTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  cartItems: {
    listStyle: "none",
    padding: "0",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    borderBottom: "1px solid #ddd",
    transition: "background 0.3s ease-in-out",
  },
  itemText: {
    fontSize: "18px",
    color: "#555",
  },
  cartTotal: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: "20px",
    color: "#222",
  },
  buyNowBtn: {
    display: "block",
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out",
  },
};

export default Cart;
