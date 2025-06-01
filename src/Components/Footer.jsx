import { Link } from "react-router-dom";
import "../css/footer.css";
function Footer(){
    return(
        <>
        <footer className="footer">
        <div className="footer-content">
          {/* Logo Area */}
          <div className="footer-logo">
            <h2>BalanceBite</h2>
          </div>

          {/* Footer Links (Arranged Vertically) */}
          <div className="footer-links">
            <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/macro">Calculate Macros</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About US</Link></li>
            </ul>
          </div>

          {/* Footer Information */}
          <div className="footer-info">
            <p>
              BalanceBite is your go-to platform for balanced nutrition tips, healthy recipes, and personalized meal plans. We are here to support your journey toward a healthier lifestyle.
            </p>
          </div>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} BalanceBite. All Rights Reserved.</p>
        </div>
      </footer>
        </>
    )
}
export default Footer;