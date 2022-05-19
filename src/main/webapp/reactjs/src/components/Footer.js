import React from 'react';

import {Navbar, Container, Col} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} classname="text-center text-white">
                        <div>All Rights Reserved</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }

}

export default Footer;