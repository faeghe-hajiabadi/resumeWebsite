import React from 'react';
import me from './images/me.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Partition from './components/Partition';
import Skills from './components//Skills';
import Education from './components//Education';
import { Link } from 'react-router-dom'

// import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn, faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrollchor from 'react-scrollchor';


function App() {
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="Nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem><Scrollchor to="#about">
              <Link style={{paddingLeft:'10px',color:'#dcddde'}}>About</Link>
            </Scrollchor></NavItem>
            <NavItem><Scrollchor to="#experience">
              <Link style={{paddingLeft:'10px',color:'#dcddde'}}>Experiences</Link>
            </Scrollchor></NavItem>
            <NavItem><Scrollchor to="#education">
              <Link style={{paddingLeft:'10px',color:'#dcddde'}}>Skills</Link>
            </Scrollchor></NavItem>

            {/* <Nav.Link href="/projects">Projects</Nav.Link> */}
            <Link style={{paddingLeft:'10px',color:'#dcddde'}} to='/projects'>Projects</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='intro'>
        <div id="about" className='first_container'>
          <div className='name'>Hello, I'm Faeghe</div>
          <div className='image_container'>
            <img src={me} className='img' alt='profile' ></img>
            <h1 className='h'>Faeghe Hajiabadi</h1>
          </div>
          <p className='paraghraph'>
            A Passionated Front End Developer who loves learning, with good knowledge of user experience and a fan of fascinating user interfaces. Studied computer engineering as a top student. Also A book lover and a classic music follower.
            </p>
        </div>
        <div id="experience">
          <Partition work={true} />
        </div>

        <div className='container' id='education'>
          <Skills />
          <Education />
          <h2 id='is' className='title'>Sample<br></br>Project Portfolio</h2>
          <span className='skills'>
            <a className='skills' href='/projects'>Let's See Some Projects I've worked on</a>

          </span>
        </div>
        <div className='bookImageContainer'>
          <div className='footer-container'>
            <span className='quote-container'>
              <h2 className='quote'>Roads go ever ever on,<br></br>
                Over rock and under tree,<br></br>
                By caves where never sun has shone,<br></br>
                By streams that never find the sea<br></br>
                -The Last Stage</h2>
            </span>
          </div>
        </div>
        <div className='socialMediaIconContainer'>
          <p className='textSocial'>Also Find Me By:</p>
          <i class="fas fa-basketball-ball"></i>
          <a href='https://dribbble.com/Faeghe' className='icon'><FontAwesomeIcon icon={faBasketballBall} size="lg" className='icon' /></a>
          <a href='https://twitter.com/faeghehaji?s=09'><FontAwesomeIcon icon={faTwitter} size="lg" className='icon' /></a>
          <a href='https://www.linkedin.com/in/faeghe-hajiabadi/'><FontAwesomeIcon icon={faLinkedinIn} size="lg" className='icon' /></a>
          <a href='https://github.com/faeghe-hajiabadi'> <FontAwesomeIcon icon={faGithub} size="lg" className='icon' /></a>
          <a href='https://medium.com/@faeghe.hajiabadi'><FontAwesomeIcon icon={faMediumM} size="lg" className='icon' /></a>
        </div>
      </div>
    </div>

  );
}

export default App;
