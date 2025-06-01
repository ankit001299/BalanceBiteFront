// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../css/login.css";

// const handleLogin = async () => {
//   const res = await fetch("http://localhost:5000/api/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await res.json();
//   if (data.token) {
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("role", data.role);

//     if (data.role === "admin") {
//       navigate("/admin");
//     } else {
//       navigate("/");
//     }
//   }
// };


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       toast.success("Login Successful!");
//       localStorage.setItem("token", res.data.token); // Store token
//       setTimeout(() => navigate("/"), 1000); // Redirect to home page
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Login failed!");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <ToastContainer />

//       {/* Bubbles Background */}
//       <div className="bubbles">
//         <span className="bubble"></span>
//         <span className="bubble"></span>
//         <span className="bubble"></span>
//         <span className="bubble"></span>
//         <span className="bubble"></span>
//       </div>

//       {/* Login Form */}
//       <div className="auth-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email:</label>
//             <input
//               type="email"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password:</label>
//             <input
//               type="password"
//               className="w-full p-2 border border-gray-300 rounded mt-1"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account?{" "}
//           <a href="/signup" className="text-green-500">
//             Sign up here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      toast.success("Login Successful!");

      // ✅ Store token and user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Redirect after delay
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed!");
    }
  };

  return (
    <div className="login-wrapper">
      <ToastContainer />

      {/* Bubbles Background */}
      <div className="bubbles">
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
        <span className="bubble"></span>
      </div>

      {/* Login Form */}
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-500">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
