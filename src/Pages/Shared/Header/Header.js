import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><h2 className='navbrand fw-bold'>Smart Zone</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink className="nav" to="/home">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/courses">
                                <NavLink className="nav ms-4" to="/products">Products</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/AddProduct">
                                <NavLink className="nav ms-4" to="/AddProduct">Add Product</NavLink>
                            </Nav.Link>
                            <Nav.Link to="/about">
                                <NavLink className="nav ms-4" to="/about">About Us</NavLink>
                            </Nav.Link>
                            {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">
                                    <NavLink className="nav ms-5" to="/login">Login</NavLink>
                                </Nav.Link>}
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;