import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'
// import logo from '../img/nborovits250.jpg';
import cv from '../files/borovits_cv.pdf';
// import { Container, Row, Col } from 'react-bootstrap';

class Resume extends Component {
    render(){
        return(
            <div style={{marginTop:'50px'}}>
                <Grid>
                    <Cell col={4}>                        
                        <h2>Nemania Borovits</h2>
                        <h4>Data Scientist</h4>
                        <hr />
                        <p>Hi there! I am Nemania! I am from Thessaloniki, Greece and I currently live in Den Bosch, the Netherlands. My ever-growing will to tackle all kinds of problems by developing practical solutions initiated my interest for the domain of Data Science. That is why after working for 5 years as a web developer I applied to the joint program <i>Data Science and Entrepreneurship</i> offered by the TU/E and the Tilburg University. For the past academic year I was employed as a research assistant by the Tilburg University for my thesis. For the time being, I am a PhD candidate in Data Engineering and AI for Privacy at Jheronimus Academy of Data Science in 's-Hertogenbosch, the Netherlands.</p>
                        <hr />
                        {/*<h5>Address</h5>
                        <p className="nsel">Uilenburg 7, 5211 EV 's-Hertogenbosch</p>
                        <h5>Phone</h5>
                        <p className="nsel">+31 640604480</p>
                        <h5>Email</h5>
                        <p className="nsel">nemaniaborovits@gmail.com</p>
                        <hr />*/}
                        <h5>You can check my detailed CV from the link below:</h5>
                        <a target={"_blank"} className="btnn" href={cv}>Borovits CV</a>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2020}
                            // endYear={}
                            schoolName="Jheronimus Academy of Data Science, the Netherlands"
                            schoolDescription="PhD in Data Engineering and AI for Privacy"
                        />
                        <Education 
                            startYear={2018}
                            endYear={2020}
                            schoolName="Jheronimus Academy of Data Science, the Netherlands"
                            schoolDescription="MSc Data Science & Entrepreneurship"
                        />
                        <Education 
                            startYear={2006}
                            endYear={2012}
                            schoolName="University Of Macedonia, Greece"
                            schoolDescription="BSc Applied Informatics"
                        />
                        <hr />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2020}
                            // endYear={2020}
                            jobName="Data Scientist / Research Assistant"
                            jobDescription="Jheronimus Academy of Data Science" 
                        />
                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName="NLP Data Scientist / Research Assistant"
                            jobDescription="Tilburg University" 
                        />
                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobName="Data Engineer"
                            jobDescription="Mouzenidis Group" 
                        />
                        <Experience
                            startYear={2014}
                            endYear={2016}
                            jobName="Full Stack Developer"
                            jobDescription="Mouzenidis Group" 
                        />
                        <Experience
                            startYear={2013}
                            endYear={2014}
                            jobName="Junior Web Developer"
                            jobDescription="Mouzenidis Travel" 
                        />
                        <hr />
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={95} 
                        />
                        <Skills
                            skill="Machine Learning"
                            progress={85} 
                        />
                        <Skills
                            skill="Deep Learning"
                            progress={85} 
                        />
                        <Skills
                            skill="NLP"
                            progress={85} 
                        />
                        <Skills
                            skill="Data Engineering"
                            progress={85} 
                        />
                    </Cell>
                </Grid>                
            </div>
        )
    }
}

export default Resume;