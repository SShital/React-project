import React, { Component } from 'react';
import {Container,Row,Col,Header} from 'react-bootstrap'
import Navigation from './Navigation';
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class Dashboard extends Component {

render() {
 return (
      <div className="AppMain">
       <Navigation/>
  <Container>
<div className="dashmain">
  <Row>
    <Col lg={6} sm={8}>
    <div className="buzme">
    <Link to="/buzzme" className="buzz-link-hold"><span>BUZZ ME</span></Link> <i className="fa fa-bell buzz-icon-hold"></i>
    </div>
    </Col>
    
    <Col lg={6} sm={4}>
     <div className="trirdiv">
           <Link to="/buzzme" className="buzz-link-hold"><span>TRIR</span></Link> <i className="fa fa-bell buzz-icon-hold"></i>
    </div>
    </Col>
  </Row>
  <Row>
    <Col lg={6} sm={8}>
    <div className="learnobj">
    <Link to="/buzzme" className="buzz-link-hold"><span>LEARNING OBJECTIVES</span></Link> <i className="fa fa-bell buzz-icon-hold"></i>
    </div>
    </Col>
    <Col lg={6} sm={4}>
     <div className="flipcards">
           <Link to="/flipcards" className="buzz-link-hold"><span>FLIP CARDS</span></Link> <i className="fa fa-bell buzz-icon-hold"></i>
    </div>
    </Col>
  </Row>
  </div>
</Container>
 </div>
    );
  }
}

export default Dashboard;
