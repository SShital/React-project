import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col,Header} from 'react-bootstrap'
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Dashboard from './components/Dashboard';
import Buzzme from './components/Buzzme'
import Score from './components/Score'
import Videos from './components/videos'
import Cicrle from './components/cicrle'
import Flipcards from './components/flipcards'
import CarouselFlipCards from './components/carousel'
import Login from './components/login'


class App extends Component {
 render() {
 return (
      <div className="App">
      <Router>
       <Switch>
        <Route exact path="/" component= {Home}/>
        <Route path="/about" component= {About}/>
        <Route path="/contact" component= {Contact}/>
        <Route path="/dashboard" component= {Dashboard}/>
        <Route path="/buzzme" component={Buzzme}/>
        <Route path="/score" component={Score}/>
        <Route path="/videos" component={Videos}/>
        <Route path="/flipcards" component= {CarouselFlipCards}/>
        <Route path="/login" component= {Login}/>
        <Route component={NoMatch}/>
     <Dashboard/>
   
     </Switch>
     </Router>
      
 </div>
    );
  }
}

export default App;
