import React from 'react';

import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className={"navbar-brand"}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" width="4%" height="4%"></img>
                    <Navbar.Brand href="#home">Book shop</Navbar.Brand>
                </Link>


                <Nav className="me-auto">
                    <Link to={"add"} className={"nav-link"}>Add Book</Link>
                    <Link to={"list"} className={"nav-link"}>Book List</Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;