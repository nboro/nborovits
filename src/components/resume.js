import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import logo from '../img/nborovits250.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Resume extends Component {
    render(){
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
                </Container>
                <Grid>
                    <Cell col={4}>                        
                        <h2>Nemania Borovits</h2>
                        <h4>Machine Learning Engineer</h4>
                        <hr />
                        <p>Hi! I am Nemania! I am from Thessaloniki, Greece and i currently live in Den Bosch, the Netherlands. My ever-growing will to tackle all kinds of problems by developing practical solutions, especially to the business world, initiated my interest for the domain of Data Science. That is why i applied to the joint program of TU/E and Tilburg University <i>Data Science and Entrepreneurship</i>. Currently, i am employed at Tilburg University as Research Assistant for my master thesis in the domain of NLP.</p>
                        <hr />
                        <h5>Address</h5>
                        <p className="nsel">Uilenburg 7, 5211 EV 's-Hertogenbosch</p>
                        <h5>Phone</h5>
                        <p className="nsel">+31 640604480, +30 6981894046</p>
                        <h5>Email</h5>
                        <p className="nsel">nemaniaborovits@gmail.com</p>
                        <hr />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2018}
                            endYear={2020}
                            schoolName="Jheronimus Academy of Data Science"
                            schoolDescription="MSc Data Science & Entrepreneurship"
                        />
                        <Education 
                            startYear={2006}
                            endYear={2012}
                            schoolName="University Of Macedonia"
                            schoolDescription="BSc Applied Informatics"
                        />
                        <hr />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear=""
                            jobName="Machine Learning Engineer"
                            jobDescription="NLP Research Assistant, Tilburg University" 
                        />
                        <Experience
                            startYear={2013}
                            endYear={2018}
                            jobName="Senior Web Developer"
                            jobDescription="Mouzenidis Group" 
                        />
                        <hr />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={95} 
                        />
                        <Skills
                            skill="Supervised Learning"
                            progress={85} 
                        />
                        <Skills
                            skill="Unsupervised Learning"
                            progress={80} 
                        />
                        <Skills
                            skill="NLP"
                            progress={85} 
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;