import React, { Component } from 'react';
import logo from '../img/nborovits250.jpg'; 
import { Row, Col, Image, Container } from 'react-bootstrap';

class Landing extends Component {

    render() {
        return(
            <div style={{marginTop:'50px'}}>
            <Container>                
                <Row>
                    <Col>
                        <div className="text-center">
                            <Image src={logo} className="avatar-img" alt="Nemania Borovits" roundedCircle />
                        </div>
                    </Col>
                </Row>               
                <Row>
                    <Col>
                        <div className="banner-text">
                            <h1>Nemania Borovits</h1>
                            <h2>Machine Learning Engineer</h2>
                            <hr />
                            <p>Python | Machine Learning | Deep Learning | NLP | Data Engineering</p>
                            <div className="social-links">                            
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/nemania-borovits-8306b812a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github*/}
                                <a href="https://github.com/nboro" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>                                

                                {/* Youtube*/}
                                <a href="https://www.youtube.com/channel/UCmjPt9vQPtT7QoimfzmlEhw/playlists" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                                {/* Instagram*/}
                                <a href="https://www.instagram.com/nborovits" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>                                

                            </div>
                        </div>
                    </Col>                    
                </Row>                
                </Container>                
            </div>
        )
    }
}

export default Landing;