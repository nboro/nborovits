import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import logo from '../img/uc.png';

class Projects extends Component {    

   render() {
        return(
            <div>
                <Container style={{marginTop:'60px'}}>
                    <Row>
                        <Col className="text-center">
                            <div className="contacts">
                                <h3>The page is currently under construction</h3>
                            </div>
                            <Image src={logo} className="avatar-img" alt="Under Construction" />
                        </Col>
                    </Row>
                </Container>
            </div>
                
        )
    }
}

export default Projects;