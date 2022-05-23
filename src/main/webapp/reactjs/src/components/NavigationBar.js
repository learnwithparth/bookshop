import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">CHARUSAT</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to={"viewMerit"} className={"nav-link"}>View Merit</Link>
                                <Link to={"viewMeritList"} className={"nav-link"}>View Merit List</Link>
                                <Link to={"add"} className={"nav-link"}>Add Book</Link>
                                <Link to={"list"} className={"nav-link"}>Book List</Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
                            </Nav>
                            {/* <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Register
                </Nav.Link>
              </Nav> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
