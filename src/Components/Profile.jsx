// import { useEffect, useState } from "react";
// import "../css/profile.css"; // Import the CSS
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const userData = localStorage.getItem("user");
//     if (userData) {
//       const parsedUser = JSON.parse(userData);
//       setUser(parsedUser);
//       fetchOrders();
//     }
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         throw new Error("Token not found in localStorage");
//       }

//       const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("Error response from server:", errorData);
//         throw new Error("Failed to fetch orders");
//       }

//       const data = await res.json();
//       setOrders(data);
//     } catch (error) {
//       console.error("Error fetching orders:", error.message);
//     }
//   };

//   if (!user) return <p>Loading profile...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//       {/* <Navbar/> */}
//         <h2>Welcome, {user.name}</h2>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>

//       <div className="orders-section">
//         <h3>Your Orders:</h3>
//         {orders.length === 0 ? (
//           <p className="no-orders">No orders found.</p>
//         ) : (
//           <ul>
//             {orders.map((order) => (
//               <li key={order._id} className="order-card">
//                 <p><strong>Total:</strong> ₹{order.totalPrice}</p>
//                 <p><strong>Address:</strong> {order.address}</p>
//                 <p><strong>Items:</strong></p>
//                 <ul className="order-items">
//                   {order.items.map((item, index) => (
//                     <li key={index}>
//                       {item.name} - ₹{item.price} x {item.quantity}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this line
import "../css/profile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchOrders();
    }
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found in localStorage");
      }

      const res = await fetch("http://localhost:5000/api/orders/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error response from server:", errorData);
        throw new Error("Failed to fetch orders");
      }

      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className="profile-header">
        <h2>Welcome, {user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <div className="orders-section">
        <h3>Your Orders:</h3>
        {orders.length === 0 ? (
          <p className="no-orders">No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order._id} className="order-card">
                <p><strong>Total:</strong> ₹{order.totalPrice}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Items:</strong></p>
                <ul className="order-items">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - ₹{item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
