import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import VideoThumbnail from 'react-video-thumbnail';
import "./video-react.css";
import './score.css'
import { Player } from 'video-react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Cicrle from './cicrle'

const percentage = 66;

class Score extends Component {
  changeRoute = (props) => {
    this.props.history.push("/videos");
  }
  render() {
    return (
      <div className="ScoreCard">
        <Navigation />
        <div className="buzzes">
          <span className="buzzbreadcrum">BUZZ ME</span>
        </div>
        <Container className="videos-screen">
          <Row>
            <Col>
              <div className="scorehead">
                <span className="greatscore text-success"> Great Job</span>
              </div>
              <hr />
              <div className="circlealign">
                <Cicrle label="">
                  <CircularProgressbar value={percentage} text={`${percentage}%`} />
                </Cicrle>
                <span className="circle-text">Your Score </span>
              </div>
            </Col>
          </Row>

          <div className="recommed martop20">
            <span className="recomdhead">Recommended Videos</span>
          </div>
   
     
    <Card className="flex-row flex-wrap martop20">
       <Col xs={4} md={6}>
     <div className="card-header border-0">
      <Card.Img src="/images/california-contractor-insurance.jpg" />
        <i className="fa fa-play-circle" onClick={this.changeRoute}></i>
        </div>
        </Col>
     <Col xs={8} md={6}>
     <Card.Body>
    <Card.Title>Video Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      
    </Card.Text>
    
  </Card.Body>
  </Col>
</Card>
  </Container>
      </div>
    );
  }
}
export default Score;


{/* <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
            <img src="//placehold.it/200" alt=""/>
        </div>
        <div class="card-block px-2">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Description</p>
            <a href="#" class="btn btn-primary">BUTTON</a>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
            FOOTER
        </div>
    </div>
 */}
