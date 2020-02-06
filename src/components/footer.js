import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return(
            <div>
                <footer>
                    <Container>
                        <Row>
                            <Col>
                                <div className="text-center">
                                    <p>Powered by
                                    <span>Nemania Borovits</span></p>
                                    <p>&copy; Copyright {this.getYear()} All Rights Reserved</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>                    
                </footer>
            </div>
        )
    }
}

export default Footer;