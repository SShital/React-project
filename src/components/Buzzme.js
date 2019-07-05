import React, { Component } from 'react';
import Navigation from './Navigation';
import QuestionSet from './quesDisplay'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios'

class Buzzme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qustionData: [],
      Index: 0,
      selectedOption: [],
      correctedAnswer:false

    };
  }

  componentDidMount() {
    axios.get('/questionData.json') // JSON File Path
      .then(response => {
        const qustionData = response.data.questions
        this.setState({
          qustionData: qustionData,
        });
        console.log("questiondata", qustionData)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  nextQuestionHandler = () => {

    if (this.state.Index == this.state.qustionData.length - 1) {
      return;
    }

    this.setState({
      Index: (this.state.Index + 1) % this.state.qustionData.length
    })
    document.getElementById("create-course-form").reset();
  }

 onChange = function (index, ques) {
    //console.log("event.target.value",event.target.value)
    //if(this.state.qustionData[ques].Answer)
    console.log("state.qustionData[ques]", this.state.qustionData[ques])
    console.log("==Question==", ques);
    console.log("==Answer==", this.state.qustionData[ques].Answer);
    console.log("==Value==", index);
    if (this.state.qustionData[ques].Answer == index) {
    alert('Good Job!');
        this.setState({
          correctedAnswer: true,
        });
    } else {
      alert("You missed it");
      this.setState({
          correctedAnswer: false,
        });
    };
  }

  render() {
    const item = this.state.qustionData[this.state.Index];

    console.log("questiondata length*********",this.state.qustionData.length)
    if (typeof (item) == "undefined") {
      return false
    }

    const questionNumber = this.state.Index;

    console.log("questionNumber-------------", questionNumber);

    let optiondata = item.options.map((option, i, selected) => {
      return <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 radiocheck col-centered"><Form.Check
        key={i}
        type="radio"
        label={option}
        id={"radio" + i}
        name="formHorizontalRadios"
        value={i}
        className="radiocheck"
        onChange={() => this.onChange(i + 1, questionNumber)} /></div>

    })
    
    let answerstatus= "";

    // if(this.state.correctedAnswer == ''){
    //   answerstatus = '' ;
    //   console.log('hiiiiiiiiiiiiiiiii');
    // }

    if (this.state.correctedAnswer) {
      answerstatus=<Col md={12} className="text-left martop20 nopadding correctfeedback">
        <span className="text-success">Good Job!</span>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.?
          </p>
      </Col>
      }
     if (this.state.correctedAnswer == false){
       answerstatus=
         <Col md={12} className="text-left martop20 nopadding incorrectedfeedback">
          <span className="text-success">Sorry!!</span>
          <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.?
        </p>
      </Col>
    }

    console.log("myyyyyyyyyyoptiondata*****************", optiondata[0]);
    // console.log("item***********",item.Question.length);
    return (
      <div className="Buzzpage">
        <Navigation />
        <div className="buzzes">
          <span className="buzzbreadcrum">BUZZ ME</span>
        </div>
        
      
        <div className="content-bg">
        <div className="content-padding">
            <Container className="buzz-screen">
          <Row>
            <Col sm={12}>
          <QuestionSet id={item.QuestionNo} question={item.Question} totalquestions={this.state.qustionData.length}/>
                  <Form id="create-course-form">
                    <fieldset>
                      <Form.Group as={Row}>
                        <Col md={12} xs={12} lg={12} className="col-centered">
                       {optiondata}
                        </Col>
                      </Form.Group>
                    </fieldset>

                  </Form>
                  <div className="clearfix"></div>
                  <Col md={12} xs={12} className="col-centered checkbutton text-center">
                    {/* <Button variant="primary"><i className="fa fa-angle-left" onClick={this.previousDataHandler}></i> Previous</Button> */}
                    <div className="checkbtn" onClick={this.nextQuestionHandler}>Check</div>
                  </Col>

                  <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered nextbutton text-center">
                            <div className="nextbtn" onClick={this.nextQuestionHandler} > NEXT </div> 
                       </div>
                         {answerstatus}
                  <Col md={6} className="text-right nopadding">
                    <Link to="/score">
                      <Button variant="light">Score</Button>
                    </Link>
                  </Col>
           
            </Col>
          </Row>
           </Container>
           </div>
              </div>
       
      </div>
    );
  }
}

export default Buzzme;