import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {

    // getYear() {
    //     return new Date().getFullYear();
    // }

    render() {
        return(
            <div className="footer">
                
                    <Container>
                        <Row>
                            <Col>
                                <div style={{paddingBottom:'25px'}} className="text-center">
                                    <p>Powered by
                                    <span>Nemania Borovits</span></p>
                                    <p>&copy; Copyright 2020 All Rights Reserved</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <p style={{display:'none'}}>This is a test</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>               
            </div>
        )
    }
}

export default Footer;