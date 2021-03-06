import React from 'react';
import HttpsRedirect from 'react-https-redirect'
import './App.css';
import {Layout, Header, Navigation, Drawer} from 'react-mdl'
import Main from './components/main';
import Footer from './components/footer';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga'

function initializeReactGA() {
  ReactGA.initialize('UA-149851084-1');
  ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA()
  
  return (
    <HttpsRedirect>
    <div>
      <Layout className="landing-grid">
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Nemania Borovits</Link> } scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/*<Link to="/aboutme">About Me</Link>*/}
                {/*<Link to="/projects">Projects</Link>*/}
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="landing-grid" title={<Link style={{textDecoration:'none', fontWeight:'bold',fontSize:'20px',color:'white'}} to="/">Nemania Borovits</Link> }>
            <Navigation>              
              <Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/resume"><span className="icon"><i className="fa fa-file" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>Resume</span></Link>
              {/*<Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/aboutme"><span className="icon"><i className="fa fa-user-circle" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>About Me</span></Link>*/}
              {/*<Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/projects"><span className="icon"><i className="fa fa-check-circle" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>Projects</span></Link>*/}
              <Link style={{fontWeight:'bold', fontSize:'18px',color:'white'}} to="/contact"><span className="icon"><i className="fa fa-envelope-open" aria-hidden="true" /></span><span style={{paddingLeft:'10px'}}>Contact</span></Link>
            </Navigation> 
        </Drawer>        
        
          <Main/>
          <Footer/>         
                
      </Layout>
      
    </div>
    </HttpsRedirect>
  );
}

export default App;
