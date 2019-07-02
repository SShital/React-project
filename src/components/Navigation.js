import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import  './Navbar.css';

class Navigation extends React.Component {
  render() {
return (
<Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="/dashboard">
   <i className="fa fa-home" aria-hidden="true"></i>
</Navbar.Brand>
 
  <Navbar>
 <Nav className="mr-3 text-gray-400 px-1">
     <Nav.Link href="http://example.com">
    <i className="fa fa-bell"></i>
    </Nav.Link>
    </Nav>

<Nav className="ml-auto">
    <Nav.Link href="http://example.com"><Image src="https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/img/avatar-6.jpg"  style= {{maxWidth:'2.5rem'}} alt="Jason Doe"  className="img-fluid rounded-circle shadow" />
    </Nav.Link>
</Nav>

   </Navbar>
</Navbar>
    )
  }
}
export default Navigation;