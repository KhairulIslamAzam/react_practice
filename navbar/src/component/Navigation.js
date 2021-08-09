import React, {Component} from 'react';
import "./assets/css/bootstrap.min.css"
import {Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button} from "bootstrap";

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;