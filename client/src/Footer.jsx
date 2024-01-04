import { Link } from "react-router-dom";
import "../public/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Mediclaim</h2>
          <p>© 2024 Company, Inc. All rights reserved.</p>
        </div>
        <div className="msg">
          <p>
            Made with <img src="../public/heart.svg" alt="heart emoji" />
          </p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>+91 9876543210</p>
          <p>support@mediclaim.com</p>
          <div className="footer-links">
            <div>
              <Link to="#">
                <img src="../public/twitter.svg" alt="twitter icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="../public/instagram.svg" alt="instagram icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="../public/facebook.svg" alt="facebook icon" />
              </Link>
            </div>
            <div>
              <Link to="#">
                <img src="../public/youtube.svg" alt="youtube icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
