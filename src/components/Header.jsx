import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Header() {
  // to acess useselector hook is used
  const wishlist = useSelector((state) => state.wishlistreducer) // here state represent store

  const cart = useSelector((state) => state.cartreducer)

  


  return (
    

      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100"  style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand href="#home"> <Link to ={''} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping fa-bounce me-3 "></i>
        E-kart
        </Link>
          
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='btn border rounded me-5 mt-2 bg-danger'>
              <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart  me-2 "></i>Wishlist<Badge bg="secondary">{wishlist.length}</Badge>
              </Link>
            </Nav.Link >
            <Nav.Link className='btn border rounded me-5 mt-2 bg-danger '><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping  me-2 "></i><Badge bg="secondary">{cart.length}</Badge>
            </Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

     
      




   
  )
}

export default Header