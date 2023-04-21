// create a navbar header  component
import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Form, Button} from 'react-bootstrap'
import SecureContent from "../../context/secure-context.js"

const NavBar = () => {
    //TO-DO 
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("searching");
    }
    return (
        <div className="navbar">
            <Navbar variant="light" expand="lg" collapseOnSelect>
                <LinkContainer to="/">
                    <Navbar.Brand>Jungle Market</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>Cart</Nav.Link>
                        </LinkContainer>
                        <SecureContent
                        loggedInContent={
                            <LinkContainer to="/profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                        }
                       />
                        <LinkContainer to="/search">
                            <Nav.Link>Search</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/details">
                            <Nav.Link>Details</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearch} >
                        <Form.Control type="text" placeholder="Search products" className="" />
                        <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;

