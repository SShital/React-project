import React, { Component } from 'react';
import Navigation from './Navigation';
import {Container,Row,Col,Button} from 'react-bootstrap'
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import VideoThumbnail from 'react-video-thumbnail';
import "./video-react.css";
import './score.css'
import { Player } from 'video-react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabPane from 'react-bootstrap/TabPane'

class Content1 extends Component {
  render() {
    return <div className="martop20">
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
    </div>
  }
}
class Content2 extends Component {
  render() {
    return <div className="martop20">
     Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
    </div>
  }
}
class Videos extends Component {
  render() {
    return (
        <div className="ScoreCard">
        <Navigation/>
        <div className="buzzes">
        <span className="buzzbreadcrum">Videos</span>
    </div>

 <Container>
      <Row>
     <Col xs={12} md={12} className="martop20">
     <div className="MainSection">
    <div className="videosection">
    <Player
      playsInline
      poster="https://video-react.js.org/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
      </div>
    </div>
   </Col>
   </Row>
  </Container>
 
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
<div className="tabs martop20">
<Nav variant="pills" className="">
 <Container>
  <Row>
    <Col xs={6} md={6}>
     <Nav.Item className="martop20">
          <Nav.Link eventKey="first">Description</Nav.Link>
        </Nav.Item>
        </Col>
        <Col xs={6} md={6}>
        <Nav.Item className="martop20">
          <Nav.Link eventKey="second">Transcript</Nav.Link>
        </Nav.Item>
      </Col>
     </Row>
      </Container>
     </Nav>
  <Col sm={12}>
      <Tab.Content>
	     
        <Tab.Pane eventKey="first">
          <Content1/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Content2/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
</div>
    </Tab.Container>

 <div className="buzzes">
        <span className="buzzbreadcrum">Videos</span>
    </div>

</div>

);}
}
export default Videos;