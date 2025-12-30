import React from 'react'
import '../../Styles/Headerstyle.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'
import { useState } from 'react'

function Header () {
   const [nav , setnav] = useState(false);

   const changevalueonscroll = () => {
    const scrollvalue = document?.documentElement?.scrollTop;
    scrollvalue > 100 ?  setnav (true) : setnav(false);

    }

   window.addEventListener('scroll', changevalueonscroll);

  return (
   <header className="header">
  <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky": "" } `} >
      <Container>  
        <Navbar.Brand href="#home" className="logo">
          <Link>
          <img src={Logo} alt="Logo" className='img-fluid'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
            <div className='cart'><i className="bi bi-bag fs-5"></i>
            <em className='roundpoint'>2</em>
            </div>
            </Nav.Link>
          
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  )
}


export default Header