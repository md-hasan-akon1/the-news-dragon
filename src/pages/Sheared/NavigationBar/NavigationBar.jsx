import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handelLogOut = () => {
    logOut()
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className='mt-2 text-decoration-none' to='/category/0'>Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>

            <Nav>
              {
                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
              }
              {
                user ? <div><Button variant="dark" onClick={handelLogOut}>logout</Button></div>
                  : <div><Button variant="dark"><Link to='/login' className='text-white'>login</Link></Button></div>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;