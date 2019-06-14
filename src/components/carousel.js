import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-bootstrap/Carousel'

import Image from 'react-bootstrap/Image'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import  Carousel  from 'react-responsive-carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Flipcards from './flipcards';

class CarouselFlipCards extends Component {
    render() {
      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      
    return (
    <div className="demo-carousel">
    <Navigation />
     <div className="buzzes">
    <span className="buzzbreadcrum">Flip Cards</span>
    </div>
    <Container>
    <Row>
    <Col xs={12}>
    <div className="slidersection">
     <Slider {...settings}>
        <div>
        <Flipcards/>
     </div>
        
        <div>
        <Flipcards/>
         </div>
       
        <div>
        <Flipcards/>
    </div>
    <div>
            <Flipcards/>
     </div>
     <div>
            <Flipcards/>
    </div>
       
        <div>
        <Flipcards/>
     </div>
  </Slider>
         </div>  
         </Col>
         </Row>
         </Container>
    </div>

      );
    }
}

export default CarouselFlipCards;


