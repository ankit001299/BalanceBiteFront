import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'visible';
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <nav className="navbar">
      <div className="logo">BalanceBite</div>
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
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
              <button onClick={() => { handleLogout(); handleNavLinkClick(); }} className="logout-button">
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





