import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line no-unused-vars
import { TypeUnderline } from 'react-bootstrap-icons';
import AppNavbar from './topbar';
import { Link } from 'react-router-dom';
import '../public/home.css'


function Home() {
    return ( 
      <div>
        <AppNavbar/>
        <div className='bigboy'>
        <div className="hero">
          <h1 className="">Insurance Claims Assistance</h1>
          <p className="lead">We are here to help you with your insurance claims process. Let us make it easy for you.</p>
          <Link to='/login'><button className="btn btn-dark w-40 mx-auto">Get Started</button></Link>
          </div>
      {/* Information Section 1 */}
      <div className="info-section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-light">
              <h2>Quick and Easy</h2>
              <p>Our streamlined process ensures that you can file your insurance claims quickly and easily, reducing stress and hassle.</p>
            </div>
            <div className="col-lg-4 text-light">
              <h2>Professional Assistance</h2>
              <p>Our team of experienced professionals is here to guide you through the entire claims process, providing expert assistance at every step.</p>
            </div>
            <div className="col-lg-4 text-light">
              <h2>Customer Support</h2>
              <p>Need help or have questions? Our dedicated customer support team is available 24/7 to assist you. Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Home;