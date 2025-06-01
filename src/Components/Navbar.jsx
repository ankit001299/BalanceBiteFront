// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "../css/navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Watch for token changes or page navigation
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // sets true if token exists
//   }, [location]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/"); // redirect to home after logout
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">BalanceBite</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/macro">Calculate Macros</Link></li>
//         <li><Link to="/shop">Shop</Link></li>
//         <li><Link to="/about">About Us</Link></li>

//         {isLoggedIn ? (
//           <li>
//             <button onClick={handleLogout} className="logout-button">
//               Logout
//             </button>
//           </li>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if token exists in localStorage and set isLoggedIn state accordingly
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token in localStorage:", token); // Debugging step
    setIsLoggedIn(!!token);
  }, [location]);

  console.log("isLoggedIn state:", isLoggedIn); // Debugging step

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">BalanceBite</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/macro">Calculate Macros</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About Us</Link></li>

        {isLoggedIn ? (
          <>
            <li><Link to="/Profile" className="profile-btn">View Profile</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/login" className="login-btn">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;





