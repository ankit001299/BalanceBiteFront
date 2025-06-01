import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/home.css";
import scoop from "../images/scoop.jpg";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    toast.success("Logged out successfully!", {
      autoClose: 2000,
      onClose: () => navigate("/"),
    });
  };

  return (
    <div className="homepage">
      <ToastContainer position="top-right" autoClose={2000} />

      <header
        className="header"
        style={{ background: `url(${scoop}) no-repeat center center/cover` }}
      >
        <div className="header-content">
          <h1>Welcome to BalanceBite</h1>
          <p>
            Your journey to balanced nutrition starts here. Discover healthy
            recipes, personalized meal plans, and expert advice—all in one place.
          </p>

          <Link to={isLoggedIn ? "/macro" : "/signup"} className="btn">
            Get Started
          </Link>
        </div>
      </header>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>BalanceBite</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/macro">Calculate Macros</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-info">
            <p>
              BalanceBite is your go-to platform for balanced nutrition tips,
              healthy recipes, and personalized meal plans. We are here to support
              your journey toward a healthier lifestyle.
            </p>
          </div>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} BalanceBite. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
