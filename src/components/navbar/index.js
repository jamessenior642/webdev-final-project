// create a navbar header  component
import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Form, FormControl, Button} from 'react-bootstrap'
import SecureContent from "../../context/secure-context.js"
import { BagFill } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

function SearchForm() {
    const [searchValue, setSearchValue] = useState('');
    
    const navigate = useNavigate();
    
    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the form from submitting and refreshing the page
        navigate(`/search/${searchValue}`); // Redirects the user to /search
        // console.log(searchValue); // Logs the input value to the console
    };
    
    return (
        <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
                type="search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search products"
                className="me-2"
                aria-label="Search"
                name="search"
            />
            <Button onClick={handleSearch} variant="outline-primary" type="submit" href="/search">Search</Button>
        </Form>
    );
}

const NavBar = () => {
        //TO-DO
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
   

                </Nav>
                <SearchForm/>
              </Navbar.Collapse>
         
          </Navbar>
    )
}

export default NavBar;

