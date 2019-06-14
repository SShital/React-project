import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card'

class Flipcards extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
    <div className="flipcard11">
  
   <Container>
       <Row>
    <Col xs={12}>
    <div className="flipsection">
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div key="front" onClick={this.handleClick} >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/img1.jpg" />
            <Card.Body>
             <Card.Text className="martop20">
              Q: Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
          </Card.Body>
          </Card>
   </div>
 
        <div key="back" onClick={this.handleClick} >
        <Card style={{ width: '18rem' }}>
       <span className="answerSpan">ANSWER</span>
        <Card.Body>
     <hr/>
             <Card.Text className="martop20">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
          </Card.Body>
          </Card>
         
        </div>
      </ReactCardFlip>
       
      </div>

    </Col>
      </Row>
      </Container>
      </div>
      
    )
  }
}

export default Flipcards;

