import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedMeals, totalPrice } = location.state || { selectedMeals: [], totalPrice: 0 };
  const [address, setAddress] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to dynamically load Razorpay
  const loadRazorpay = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // const handlePayment = async () => {
  //   if (!address) {
  //     alert("Please enter your address.");
  //     return;
  //   }

  //   const loaded = await loadRazorpay();
  //   if (!loaded) {
  //     alert("Failed to load Razorpay. Please check your internet connection.");
  //     return;
  //   }

  //   const options = {
  //     key: "rzp_test_A3RM3Asww6uWvF", // Replace with your actual Razorpay API key
  //     amount: totalPrice * 100, // Amount in paisa
  //     currency: "INR",
  //     name: "Meal Plan Payment",
  //     description: "Payment for your selected meals",
  //     image: "https://yourwebsite.com/logo.png",
  //     handler: function (response) {
  //       setShowSuccess(true); // Show success message
  //       setTimeout(() => {
  //         navigate("/"); // Redirect to home after 3 seconds
  //       }, 3000);
  //     },
  //     prefill: {
  //       name: "User Name",
  //       email: "user@example.com",
  //       contact: "9999999999",
  //     },
  //     theme: {
  //       color: "#4CAF50",
  //     },
  //   };

  //   const razor = new window.Razorpay(options);
  //   razor.open();
  // };
  const token = localStorage.getItem("token");
console.log("🔐 Token being sent:", token);
  const handlePayment = async () => {
    if (!address) {
      alert("Please enter your address.");
      return;
    }
  
    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Failed to load Razorpay.");
      return;
    }
  
    const options = {
      key: "rzp_test_A3RM3Asww6uWvF",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Meal Plan Payment",
      description: "Payment for your selected meals",
      handler: async function (response) {
        try {
          const token = localStorage.getItem("token");
  
          // Add console log to check selectedMeals and request body
          console.log("Selected Meals:", selectedMeals);
  
          await fetch("https://balancebiteback-1.onrender.com/api/orders/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              items: selectedMeals,   // Sending selectedMeals to the backend
              totalPrice,
              address,
            }),
          });
  
          setShowSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } catch (error) {
          console.error("Error saving order:", error);
        }
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#4CAF50",
      },
    };
  
    const razor = new window.Razorpay(options);
    razor.open();
  };
  
  

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      {/* Address Input Section */}
      <div className="address-section">
        <h3>Enter Your Address</h3>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your full address..."
          className="address-input"
        />
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {selectedMeals.length > 0 ? (
          selectedMeals.map((meal, index) => (
            <p key={index}>{meal.name} - ₹{meal.price}</p>
          ))
        ) : (
          <p>No meals selected.</p>
        )}
        <p><strong>Total Price: ₹{totalPrice}</strong></p>
      </div>

      {/* Pay Button */}
      <button className="pay-button" onClick={handlePayment}>
        Pay Now
      </button>

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="success-popup">
          <div className="success-box">
            <h2>✅ Payment Successful!</h2>
            <p>Your order has been placed successfully.</p>
            <button className="close-btn" onClick={() => navigate("/")}>
              Go to Home 🏠
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
