import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admindashboard.css"; // optional css

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Admin created successfully!");
        navigate("/admin/login"); // After signup go to login page
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("An error occurred");
    }
  };

  return (
    <div className="admin-signup-page">
      <h2>Create Admin Account</h2>
      <form onSubmit={handleSignup} className="admin-signup-form">
        <input
          type="text"
          placeholder="Admin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AdminSignup;
