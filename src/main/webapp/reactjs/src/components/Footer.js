import React from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';

export default class Footer extends React.Component{
    render(){
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear}, All rights Reserved - CHARUSAT</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}