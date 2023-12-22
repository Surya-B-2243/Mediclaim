import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../public/topbar.css'

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className='nav-brand mr-auto ml-2'>Mediclaim</Navbar.Brand>
      <Nav className="ml-auto mr-5 justify-content-end" style={{marginLeft:'auto',marginRight:'5px'}}>
      <Link className='mr-2'to = "/register"><Button variant="outline-light" className="mr-2" style={{marginLeft:'5px'}}>Register</Button></Link>
      <Link to = "/login"><Button variant="outline-light" className="mr-2" style={{marginLeft:'5px'}}>Login</Button></Link>
      <Link to = "/"><Button variant="outline-light" style={{marginLeft:'5px'}}>Home</Button></Link>
      <Link to = "/Prompt"><button className='search'>AI Search</button></Link>
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;