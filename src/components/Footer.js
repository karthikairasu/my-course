import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-light py-2" style={{position:"fixed",bottom:'0px', width:'100%'}}>
            <Container>
                <Row>
                <Col md={12} className="text-center text-md-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} My-Course. All Rights Reserved.</p>
                </Col>
                </Row>
            </Container>
        </footer>
    </div>
  )
}

export default Footer