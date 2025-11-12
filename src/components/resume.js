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
                        <h4>Researcher & Data Scientist</h4>
                        <hr />
                        <p>Hi there! I am Nemania! I am a Data Scientist and a Researcher with a background in software and data engineering. After five years in industry in Greece, I pursued an MSc in Data Science & Entrepreneurship before transitioning to a PhD in Data Engineering and AI for Privacy, co-financed by KPN. My work spans privacy engineering, privacy-preserving AI and data governance, bridging research with industry applications. Currently, I am working as a Postdoctoral Researcher, I continue to pursue my passion for designing and developing AI-driven systems with impact in both industry and society.</p>
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
                            endYear={2024}
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
                            startYear={2024}
                            // endYear={2020}
                            jobName="Postdoctoral Researcher"
                            jobDescription="Tilburg University" 
                        />
                        <Experience
                            startYear={2020}
                            // endYear={2020}
                            jobName="Data Scientist"
                            jobDescription="KPN" 
                        />
                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName="Data Scientist - Research Assistant"
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
                            progress={100} 
                        />
                        <Skills
                            skill="Machine Learning"
                            progress={100} 
                        />
                        <Skills
                            skill="Deep Learning"
                            progress={100} 
                        />
                        <Skills
                            skill="NLP"
                            progress={100} 
                        />
                        <Skills
                            skill="Data Engineering"
                            progress={100} 
                        />
                    </Cell>
                </Grid>                
            </div>
        )
    }
}

export default Resume;