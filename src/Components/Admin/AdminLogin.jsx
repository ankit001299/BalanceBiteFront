import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admindashboard.css"; // (optional extra css)

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token); // Save admin token
        alert("Login successful!");
        navigate("/admin"); // Redirect to Admin Home
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred");
    }
  };

  return (
    <div className="admin-login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="admin-login-form">
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
