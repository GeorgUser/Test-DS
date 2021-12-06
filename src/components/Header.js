import React from 'react';
import {Col, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import ButtonWrapper from "./ButtonWrapper"
import logo from "../images/logo.svg";

const Header = () => {
    return (
        <header className="App-header">
            <Navbar expand="lg">
                <Container fluid>
                    <Col xs="9" sm="6" md="8" lg="1">
                        <Navbar.Brand href="/">
                            <img src={logo} className="App-logo" alt="logo" />
                        </Navbar.Brand>
                    </Col>
                    <Navbar.Collapse
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Container fluid>
                        <Nav className="justify-content-center flex-grow-1 pe-3" activeKey="/">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#action2">About us</Nav.Link>
                            <NavDropdown title="Our services" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Lorem ipsum</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Lorem ipsum</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Lorem ipsum</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Lorem ipsum</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact">Contact us</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar.Collapse >
                    <Col xs="0" sm="3" md="2" lg="auto">
                        <ButtonWrapper href={"tel:0987654321"} bsPrefix={"custom-btn"} variant="light">Call us</ButtonWrapper>
                    </Col>
                    <Col xs="3" sm="3" md="2"  lg="auto">
                        <Navbar.Toggle children="Menu" aria-controls="offcanvasNavbar" />
                    </Col>
                </Container>
            </Navbar>
        </header>
    )
};

export default Header;