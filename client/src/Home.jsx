import AppNavbar from "./topbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../public/home.css";

function Home() {
  return (
    <div>
      <AppNavbar />
      <div className="bigboy">
        <div className="hero">
          <div className="hero-text">
            <h1>Insurance Claims Assistance</h1>
            <p>
              We are here to help you with your insurance claims process. Let us
              make it easy for you.
            </p>
            <Link to="/login">
              <button className="btn">
                <span>Get Started</span>
              </button>
            </Link>
          </div>
          <div className="hero-img">
            <img src="../public/happy-family.jpg" alt="happy family" />
          </div>
        </div>
        {/* Information Section 1 */}
        <div className="info-section">
          <div className="container">
            <div className="info">
              <h2>Quick and Easy</h2>
              <p>
                Our streamlined process ensures that you can file your insurance
                claims quickly and easily, reducing stress and hassle.
              </p>
            </div>
            <div className="info">
              <h2>Professional Assistance</h2>
              <p>
                Our team of experienced professionals is here to guide you
                through the entire claims process, providing expert assistance
                at every step.
              </p>
            </div>
            <div className="info">
              <h2>Customer Support</h2>
              <p>
                Need help or have questions? Our dedicated customer support team
                is available 24/7 to assist you. Your satisfaction is our
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
