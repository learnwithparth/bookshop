import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from '../../src/images/logo.png';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src={logo} width={30} height={30} alt=""></img> CHARUSAT
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#action2">Convocation</Nav.Link>
                                <NavDropdown title="Admission" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="addMerit">Add Merit</NavDropdown.Item>
                                    <NavDropdown.Item href="meritregister">Apply for management quota admission</NavDropdown.Item>
                                    <NavDropdown.Item href="viewMerit">
                                        View Your Merit
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="viewMeritList">
                                        View Complete Merit List
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
                        </Navbar.Collapse>
                        <Nav className="navbar-right">
                            <Link to={"login"} className={"nav-link"}>
                                Login
                            </Link>
                            <Link to={"register"} className="nav-link">
                                Register
                            </Link>
                        </Nav>
                    </Container>

                </Navbar>
      {/*          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
      {/*              <Container>*/}
      {/*                  <Navbar.Brand href="#home"><img src={logo} width={30}*/}
      {/*                                                  height={30}></img>{' '}CHARUSAT</Navbar.Brand>*/}
      {/*                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>*/}
      {/*                  <Navbar.Collapse id="responsive-navbar-nav">*/}
      {/*                      <Nav className="mr-auto">*/}
      {/*                          <Link to={"addMerit"} className={"nav-link"}>Add Merit</Link>*/}
      {/*                          <Link to={"viewMerit"} className={"nav-link"}>View Merit</Link>*/}
      {/*                          <Link to={"viewMeritList"} className={"nav-link"}>View Merit List</Link>*/}

      {/*                          /!* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
      {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
      {/*  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
      {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
      {/*  <NavDropdown.Divider />*/}
      {/*  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
      {/*</NavDropdown> *!/*/}
      {/*                      </Nav>*/}
      {/*                      <Nav className="navbar-right">*/}
      {/*                          <Link to={"login"} className={"nav-link"}>Login</Link>*/}
      {/*                          <Link to={"register"} className="nav-link">Register</Link>*/}
      {/*                      </Nav>*/}
      {/*                  </Navbar.Collapse>*/}
      {/*              </Container>*/}
      {/*          </Navbar>*/}
            </div>
        );
    }
}
