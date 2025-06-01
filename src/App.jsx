import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/CartContext";
import "./index.css";

// Loading component with proper styling
const LoadingFallback = () => (
  <div className="suspense-container">
    <div className="loading-spinner">Loading...</div>
  </div>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Lazy load components with proper loading handling
  const Results = lazy(() => import("./Components/Results"));
  const Home = lazy(() => import("./Components/Home"));
  const MacroCalculator = lazy(() => import("./Components/MacroCalculator"));
  const MealGenerator = lazy(() => import("./Components/MealGenerator"));
  const Cart = lazy(() => import("./Components/Cart"));
  const Checkout = lazy(() => import("./Components/Checkout"));
  const HealthcareStore = lazy(() => import("./Components/HealthcareStore"));
  const CartPage = lazy(() => import("./Components/CartPage"));
  const About = lazy(() => import("./Components/About"));
  const SignUp = lazy(() => import("./Components/SignUp"));
  const Login = lazy(() => import("./Components/Login"));
  const Admin = lazy(() => import("./Components/Admin/Adminhome"));
  const Profile = lazy(() => import("./Components/Profile"));
  const AdminLogin = lazy(() => import("./Components/Admin/AdminLogin"));
  const AdminSignup = lazy(() => import("./Components/Admin/AdminSignup"));
  const AdminProtect = lazy(() => import("./Components/Admin/PrivateAdminRoute"));

  return (
    <CartProvider>
      <div className={`app-container ${isLoaded ? 'loaded' : 'loading'}`}>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="results" element={<Results />} />
              <Route path="/" element={<Home />} />
              <Route path="macro" element={<MacroCalculator />} />
              <Route path="meal-generator" element={<MealGenerator />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="shop" element={<HealthcareStore />} />
              <Route path="store-cart" element={<CartPage />} />
              <Route path="about" element={<About />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />

              {/* Admin protected */}
              <Route 
                path="/admin" 
                element={
                  <AdminProtect>
                    <Admin />
                  </AdminProtect>
                } 
              />

              {/* Admin login/signup public */}
              <Route path="/admin/signup" element={<AdminSignup />} />
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
