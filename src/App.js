import React from 'react';

import './App.css';
import {Layout, Header, Navigation, Drawer} from 'react-mdl'
import { Container, Row, Col } from 'react-bootstrap';
import Main from './components/main';
// import Footer from './components/footer';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga'

function initializeReactGA() {
  ReactGA.initialize('UA-149851084-1');
  ReactGA.pageview('/homepage');
}

function getYear() {
  return new Date().getFullYear();
}
function App() {
  initializeReactGA()
  
  return (
    <div>
      <Layout className="landing-grid">
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Nemania Borovits</Link> } scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/*<Link to="/aboutme">About Me</Link>*/}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="landing-grid" title={<Link style={{textDecoration:'none', fontWeight:'bold',fontSize:'20px',color:'white'}} to="/">Nemania Borovits</Link> }>
            <Navigation>              
              <Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/resume"><span className="icon"><i className="fa fa-file" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>Resume</span></Link>
              {/*<Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/aboutme"><span className="icon"><i className="fa fa-user-circle" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>About Me</span></Link>*/}
              <Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/projects"><span className="icon"><i className="fa fa-check-circle" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>Projects</span></Link>
              <Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/contact"><span className="icon"><i className="fa fa-envelope-open" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>Contact</span></Link>
            </Navigation> 
        </Drawer>        
        
          <Main/>
          <div>
                <footer>
                    <Container>
                        <Row>
                            <Col>
                                <div className="text-center">
                                    <p>Powered by
                                    <span>Nemania Borovits</span></p>
                                    <p>&copy; Copyright {getYear()} All Rights Reserved</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>                    
                </footer>
            </div>
                
      </Layout>
      
    </div>
    
  );
}

export default App;
