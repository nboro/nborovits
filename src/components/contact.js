import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';  

class Contact extends Component {
    render() {
        return(
           <div>
                <Container style={{marginTop:'50px'}}>
                        <Row>
                            <Col>
                            <div className="contacts">
                            <h2 style={{paddingTop:'10px'}}>Contact Me</h2>
                            <hr />
                            <div>
                                <p>Just in case you want to get in touch with me:</p>
                                <List>
                                    <ListItem>
                                        <ListItemContent>
                                            <span className="fa fa-phone-square my-icon"></span>          <span className="nsel">&nbsp;(+31) 64 060 4480</span>     
                                        </ListItemContent>
                                    </ListItem>                            
        
                                    <ListItem>
                                        <ListItemContent>
                                            <span className="fa fa-envelope-square my-icon"></span>       <span className="nsel">&nbsp;nemaniaborovits@gmail.com</span>   
                                        </ListItemContent>
                                    </ListItem>
        
                                    <ListItem>
                                        <ListItemContent>
                                            <span className="fa fa-skype my-icon"></span>
                                            <span className="nsel">&nbsp; nborovits</span>
                                        </ListItemContent>
                                    </ListItem>                                
                                </List>
                            </div> 
                            </div>
                                    
                            </Col>
                        </Row>
                </Container>                
           </div>             
        )
    }
}

export default Contact;