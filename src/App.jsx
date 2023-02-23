import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col'
import Logo from './logo.png'
import chair from  './vacant-chair.png'
import uploader from './uploader.png'
import logo2 from './logo2.png'
import insta from './insta-icon.png'
import playstore from './playstore.png'
import twitter from './twitter.png'
import apple from './apple.png'
import youtube from './youtube.png'


function App() {
  const [state,setstate]=useState(false)
  return (
    <div className="App" id="home">
     <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"><button  className='btn-logo'><img src={Logo} alt="" className='logo'/></button></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav' onClick={(e)=>{setstate(!state)}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >About us</Nav.Link>
            <Nav.Link href="#link" >Services</Nav.Link>
            <Nav.Link href="#link" >Pricing</Nav.Link>
            <Nav.Link href="#link" >Content</Nav.Link>
            <Nav.Link className='btn'>Login</Nav.Link>
            <Nav.Link className='btn'>Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {state ? null:<img src={chair} alt="" className='chair'/>}
    <h4 className='career'>career</h4>
    <div className='sub-res'>
    <h4>Submit Your Resume</h4>
    <h6 >Become discoverable for all of our roles</h6></div>
    <div className='P-D'>
    <h5>Personal Details</h5>
    <p>Please complete the below form and attach a CV.</p></div>
    <div className='details'>
      <form action="submit" method="get">
    <div className='mg'>
      <p>Email Address</p>
      <input type="email" name="" id="" className='box' placeholder='Email'/>
    </div>
    <Row className='Row'>
    <Col><div className='mg'>
      <p>First Name</p>
      <input type="text" name="" id="" className='box'/>
    </div></Col>
    <Col><div className='mg'>
      <p>Last Name</p>
      <input type="text" name="" id="" className='box'/>
    </div></Col>
    <Col><div className='mg'>
      <p>Telephone</p>
      <input type="number" name="" id="" className='box'/>
      <p className='text'>Please include your country and area code</p>
    </div></Col>
    </Row>
    <div className='CV'>
      <p>Upload CV</p>
      <label htmlFor="CV">
        <img src={uploader} alt="" className='up-cv'/>
      <input type="file" placeholder='Upload CV' className='up-cv1' id='CV'/>
      </label>
      <p>select resume file(TXT,PDF or Word DOC)</p>
    </div>
    <Button type='submit'>Submit</Button></form>
    </div>
    <footer>
      <div className="footer">
    <Row>
      <Col>
        <img src={logo2} alt="" className='logo2'/>
        <p>KIVLIK is a mobile steam car wash company. which offers premium car wash and detailing services at your doorsteps. Conceniently book a car wash with a few taps on your phone.</p><br />
        <p>KIVLIK has several packages to meet your budget and requirements. Convienly book a car wash wit a few taps using the KIVLIK App on website.</p>
      </Col>
      <Col>
        <h5>COMPANY</h5>
        <h6>Who We Are</h6>
        <h6>Blog</h6>
        <h6>Report Fraud</h6>
        <h6>Contact</h6>
        <h6>Investors Relation</h6>
      </Col>
      <Col>
      <h4>GOT QUESTIONS?</h4>
      <h3>Help Center</h3>
      <h6>FOLLOW US</h6>
      <Row className='foot-r'>
        <Col>
         <a href="#home"><h6 className='facebook'>f</h6></a>
        </Col>
        <Col>
        <a href="#home"><img src={insta} alt="" className='insta'/></a>
        </Col>
        <Col>
        <a href="#home"><img src={twitter} alt="" className='insta'/></a>
        </Col>
        <Col>
        <a href="#home"><img src={youtube} alt="" className='insta'/></a>
        </Col>
      </Row>
        <Row>
          <Col>
            <a href="#home"><img src={apple} alt="" className='apple' /></a>
            </Col>
            <Col>
            <a href="#home"><img src={playstore} alt="" className='apple' /></a>
          </Col>
        </Row>
      </Col>
    </Row>
    </div></footer>
    <Container>
      <Row>
        <Col>
        <p className='right'>©2021 KivLik.All Right reserved.</p>
        </Col>
        <Col>
        <p className='last'>Privacy|Terms|Security|Sitemap</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
