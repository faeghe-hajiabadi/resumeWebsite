import React from 'react';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import firstimg from '../images/react native.jpeg';
import secimg from '../images/salam.png';
import thirdimg from '../images/Group2.png';
import fourthimg from '../images/rahnema.png';

function Project(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="Nav">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/'>About</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='project-container'>
                <h1 className='project-title'>Projects</h1>
                <div className='first-left-box'>
                  
                    <div className='first-left-box-text'>
                        <a href='https://github.com/faeghe-hajiabadi/ecommerce' className='text-margin'>React Native Eccomerce Application<br>
                        </br></a>
                        <p className='text-body'>
                            An Application with Redux, saga and high performance pagination
                            also this project has a meduim article if you like to read more.
                        </p>
                    </div>
                    <img src= {firstimg} alt="Nature" className='box-1'></img>
                    {/* <a className='box-1' href='https://github.com/faeghe-hajiabadi/ecommerce'></a> */}
                </div>
                <div className='second-right-box'>
                    <div className='second-right-box-text'>
                        <a href='https://www.salamcinama.ir' className='text-margin'>React News Application<br>
                        </br></a>
                        <p className='text-body'>
                            This web application has the best cinema news, movie download link and movie recommendation<br></br>
                            I was front end developer and ui/ux designer of this project.
                        </p>
                    </div>
                    <img src= {secimg} alt="Nature" className='box-2' ></img>
                    {/* <a className='box-2' href='https://www.salamcinama.ir'></a> */}
                </div>
                <div className='first-left-box'>
                  
                    <div className='first-left-box-text'>
                        <a className='text-margin' href='https://github.com/faeghe-hajiabadi/Landing-Page-With-Sass/tree/master'>A Landing Page With Sass<br>
                        </br></a>
                        <p className='text-body'>
                        This is an example of sass power and it's abilities.if you like better styling try it
                </p>
                    </div>
                    <img src= {thirdimg} alt="Nature" className='box-3' ></img>
                    {/* <a className='box-3' href='https://github.com/faeghe-hajiabadi/Landing-Page-With-Sass/tree/master'> */}
                    {/* </a> */}
                </div>
                <div className='second-right-box'>
                    <div className='second-right-box-text'>
                        <a  href=' https://rahnemacollege.com/' className='text-margin'>Travel Giud User Interface Design<br>
                        </br>
                        </a>
                        <p className='text-body'>
                            This project was done in rahnema college ui/ux internship.
                            A giud for tourists to help them enjoy the travel
                        </p>
                    </div>
                    <img src= {fourthimg} alt="Nature" className='box-4' ></img>
                    {/* <a className='box-4' href=' https://rahnemacollege.com/'></a> */}
                </div>
            </div>
        </div>
    );
}

export default Project;
