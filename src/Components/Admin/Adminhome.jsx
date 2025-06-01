import AdminNavbar from "./AdminNavbar";
// import "../../css/admindashbaord.css";
import "../../css/admindashboard.css";



const Adminhome = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <main className="admin-content">
        <h1>Admin Dashboard</h1>
        <p>Manage users, orders, and admins from a single interface.</p>
      </main>
      <footer className="admin-footer">
        <p>&copy; {new Date().getFullYear()} BalanceBite Admin Panel. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Adminhome;
