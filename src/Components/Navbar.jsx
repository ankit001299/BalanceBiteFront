import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
    navigate("/"); // Redirect to home after logout
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">BalanceBite</div>
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleNavLinkClick}>Home</Link></li>
        <li><Link to="/macro" onClick={handleNavLinkClick}>Calculate Macros</Link></li>
        <li><Link to="/shop" onClick={handleNavLinkClick}>Shop</Link></li>
        <li><Link to="/about" onClick={handleNavLinkClick}>About Us</Link></li>

        {isLoggedIn ? (
          <>
            <li><Link to="/Profile" className="profile-btn" onClick={handleNavLinkClick}>View Profile</Link></li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <li><Link to="/login" className="login-btn" onClick={handleNavLinkClick}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;





