// import { Link } from "react-router-dom";
// // import "../../css/admindashboard.css";
// import "../../css/admindashboard.css";


// const AdminNavbar = () => {
//   return (
//     <nav className="admin-navbar">
//       <div className="admin-logo">BalanceBite Admin</div>
//       <ul className="admin-nav-links">
//         <li><Link to="/admin">Home</Link></li>
//         <li><Link to="/admin/create-admin">Create Admin</Link></li>
//         <li><Link to="/admin/view-admins">View Admins</Link></li>
//         <li><Link to="/admin/create-user">Create User</Link></li>
//         <li><Link to="/admin/user-orders">User Orders</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default AdminNavbar;
import { Link, useNavigate } from "react-router-dom";
import "../../css/admindashboard.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const isAdminLoggedIn = !!localStorage.getItem("adminToken"); // Check token

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear token
    alert("Logged out successfully!");
    navigate("/admin/login");
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-logo">BalanceBite Admin</div>
      <ul className="admin-nav-links">
        <li><Link to="/admin">Home</Link></li>
        <li><Link to="/admin/create-admin">Create Admin</Link></li>
        <li><Link to="/admin/view-admins">View Admins</Link></li>
        <li><Link to="/admin/create-user">Create User</Link></li>
        <li><Link to="/admin/user-orders">User Orders</Link></li>
        {isAdminLoggedIn ? (
          <li><button onClick={handleLogout} className="admin-logout-button">Logout</button></li>
        ) : (
          <li><Link to="/admin/login" className="admin-login-button">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default AdminNavbar;
