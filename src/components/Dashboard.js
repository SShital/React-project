import React, { Component } from 'react';
import {Container,Row,Col,Header} from 'react-bootstrap'
import Navigation from './Navigation';
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'

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
    <Link to="/buzzme" className="buzz-link-hold"><span>BUZZ ME</span></Link> <Image src="/images/icon_04.png" className="dashboardicons"/>
    </div>
    </Col>
    
    <Col lg={6} sm={4}>
     <div className="trirdiv">
           <Link to="/buzzme" className="buzz-link-hold"><span>TRIR</span></Link> <Image src="/images/icon_01.png" className="dashboardicons"/>
    </div>
    </Col>
  </Row>
  <Row>
    <Col lg={6} sm={8}>
    <div className="learnobj">
    <Link to="/buzzme" className="buzz-link-hold"><span className="learnObj">LEARNING OBJECTIVES</span></Link> 
    <span><Image src="/images/icon_02.png" className="dashboardicons1"/></span>
    </div>
    </Col>
    <Col lg={6} sm={4}>
     <div className="flipcards">
           <Link to="/flipcards" className="buzz-link-hold"><span>FLIP CARDS</span></Link> <Image src="/images/icon_03.png" className="dashboardicons"/>
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
