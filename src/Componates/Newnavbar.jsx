import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Newnavbar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='nav-logo fs-2'>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'><Link to='/' className='text-dark mx-1 nav'>HOME</Link></Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'><Link to='/Services' className='text-dark mx-1 nav'>SERVICES</Link></Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav' >{props.project}</Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'>OUR TEAM</Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'>PAGES</Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'>BLOG</Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'>COST CALCULATOR</Nav.Link>
            <Nav.Link href="#action1" className='text-dark mx-1 nav'>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Newnavbar;
Newnavbar.defaultProps = {
  title: "Set title here",
}
