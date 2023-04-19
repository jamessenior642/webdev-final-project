// create a navbar header  component
import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Form, Button} from 'react-bootstrap'

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


                        <LinkContainer to="/recommendation">
                            <Nav.Link>Recommendation</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/store">
                            <Nav.Link>Store</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link>Logout</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form inline onSubmit={handleSearch} >
                        <Form.Control type="text" placeholder="Search" className="" />
                        <Button variant="outline-success" type="submit">Search</Button>
                        </Form>
                </Navbar.Collapse>
            </Navbar>
            
         


        </div>
    )
}

export default NavBar;

