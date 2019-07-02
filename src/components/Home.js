import React, { Component } from 'react';
// import './App.css';
import {Container,Row,Col,Button} from 'react-bootstrap'
import {withRouter} from "react-router-dom";

class Home extends Component {
 handleClick = () => {
         this.props.history.push('/login');
    };
render() {
return (
<header className="masthead">
 <Container className="h-100">
    <Row className="h-100 align-items-center">
      <Col className="text-center">
        <div className="dailyInfo">
        <h1>
            <span className="dailyhead">YOUR DAILY</span><br/>
            <span className="nudgehead"> NUDGES</span>
        </h1>
        </div>
         
         <Button className="startbtn" size="lg" onClick={this.handleClick}>Start</Button>
    </Col>
    </Row>
  </Container>
</header>
    );
  }
}
export default withRouter(Home);