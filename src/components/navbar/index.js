// create a navbar header  component
import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Form, FormControl, Button} from 'react-bootstrap'
import SecureContent from "../../context/secure-context.js"
import { BagFill } from 'react-bootstrap-icons';

const NavBar = () => {
        //TO-DO 
        const handleSearch = (e) => {
            e.preventDefault();
            console.log("searching");
        }
        return (
            <Navbar variant="light" expand="lg">
           
              <Navbar.Brand href="/"><BagFill/>JungleMarket</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                //   style={{ maxHeight: '100px' }}
                //   navbarScroll
                >
                  <SecureContent
                        nonloggedincontent={
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        } loggedincontent= {
                            <LinkContainer to="/logout">
                                <Nav.Link>Logout</Nav.Link>
                            </LinkContainer>
                            }
                        />
                        <SecureContent
                        loggedincontent={
                            <LinkContainer to="/profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                        } nonloggedincontent={
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        }
                       />
                  <LinkContainer to="/details">
                             <Nav.Link>Details</Nav.Link>
                         </LinkContainer>
                         <LinkContainer to="/search">
                             <Nav.Link>Search</Nav.Link>
                         </LinkContainer>
                </Nav>
                <Form className="d-flex" onSubmit={handleSearch}>
                  <FormControl
                    type="search"
                    placeholder="Search products"
                    className="me-2"
                    aria-label="Search"
          
                  />
                  <Button variant="outline-success" type="submit" href="/search">Search</Button>
                </Form>
              </Navbar.Collapse>
         
          </Navbar>
    // //TO-DO 
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     console.log("searching");
    // }
    // return (
    //     <div className="navbar">
    //         <Navbar variant="light" expand="lg" collapseOnSelect>
    //             <LinkContainer to="/">
    //                 <Navbar.Brand><BagFill/>JungleMarket</Navbar.Brand>
    //             </LinkContainer>
    //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //             <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="mr-auto">
    //                     <SecureContent
    //                     nonloggedincontent={
    //                     <LinkContainer to="/login">
    //                         <Nav.Link>Login</Nav.Link>
    //                     </LinkContainer>
    //                     } loggedincontent= {
    //                         <LinkContainer to="/logout">
    //                             <Nav.Link>Logout</Nav.Link>
    //                         </LinkContainer>
    //                         }
    //                     />
                        
    //                     <SecureContent
    //                     loggedincontent={
    //                         <LinkContainer to="/profile">
    //                             <Nav.Link>Profile</Nav.Link>
    //                         </LinkContainer>
    //                     } nonloggedincontent={
    //                     <LinkContainer to="/signup">
    //                         <Nav.Link>Signup</Nav.Link>
    //                     </LinkContainer>
    //                     }
    //                    />
    //                    <LinkContainer to="/details">
    //                         <Nav.Link>Details</Nav.Link>
    //                     </LinkContainer>
    //                     <LinkContainer to="/cart">
    //                         <Nav.Link>Cart</Nav.Link>
    //                     </LinkContainer>
    //                     <LinkContainer to="/search">
    //                         <Nav.Link>Search</Nav.Link>
    //                     </LinkContainer>

    //                 </Nav>
    //                 <Form className="d-flex" onSubmit={handleSearch} >
    //                     <Form.Control type="text" placeholder="Search products" className="" />
    //                     <Button variant="outline-success" type="submit">Search</Button>
    //                     </Form>
    //             </Navbar.Collapse>
    //         </Navbar>
    //     </div>
    )
}

export default NavBar;

