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

  // previousDataHandler =()=>{
  //   if(this.state.selectedIndex == 0)
  //          return;

  //         this.setState(prevState => ({
  //             selectedIndex: prevState.selectedIndex - 1
  //         }))

  // }


  onChange = function (index, ques) {
    //console.log("event.target.value",event.target.value)
    //if(this.state.qustionData[ques].Answer)
    console.log("state.qustionData[ques]", this.state.qustionData[ques])
    console.log("==Question==", ques);
    console.log("==Answer==", this.state.qustionData[ques].Answer);
    console.log("==Value==", index);
    if (this.state.qustionData[ques].Answer == index) {
      alert('Good Job!');
    } else {
      alert("You missed it");
    };
  }

  render() {
    const item = this.state.qustionData[this.state.Index];

    if (typeof (item) == "undefined") {
      return false
    }

    const questionNumber = this.state.Index;

    console.log("questionNumber-------------", questionNumber);

    let optiondata = item.options.map((option, i, selected) => {
      return <Form.Check
        key={i}
        type="radio"
        label={option}
        id={"radio" + i}
        name="formHorizontalRadios"
        value={i}
        onChange={() => this.onChange(i + 1, questionNumber)} />

    })

    console.log("myyyyyyyyyyoptiondata*****************", optiondata[0]);
    // console.log("item***********",item.options);
    return (
      <div className="Buzzpage">
        <Navigation />
        <div className="buzzes">
          <span className="buzzbreadcrum">BUZZ ME</span>
        </div>
        <Container className="buzz-screen">
          <Row>
            <Col>
              <div className="content-bg">
                <div className="content-padding">

                  <QuestionSet id={item.QuestionNo} question={item.Question} />
                  <Form id="create-course-form">
                    <fieldset>
                      <Form.Group as={Row}>
                        <Col md={10} xs={12} className="radio">
                          {optiondata}
                        </Col>
                      </Form.Group>
                    </fieldset>

                  </Form>
                  <div className="clearfix"></div>
                  <Col md={6} className="text-left nopadding">
                    {/* <Button variant="primary"><i className="fa fa-angle-left" onClick={this.previousDataHandler}></i> Previous</Button> */}
                    <Button variant="primary" className="nextbtn" onClick={this.nextQuestionHandler}>Next <i className="fa fa-angle-right"></i></Button>
                  </Col>

                  <Col md={6} className="text-right nopadding">
                    <Link to="/score">
                      <Button variant="light">Score</Button>
                    </Link>
                  </Col>

                  <Col md={12} className="text-left martop20 nopadding">
                    <span className="text-success">Good Job!</span>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.?
                  </p>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Buzzme;