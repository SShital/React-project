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
             ques_map: '',
            
  };
   
  }

  componentDidMount() {
       axios.get('/questionData.json') // JSON File Path
      .then(response => {
        // console.log(response.data.questions);
      const qustionData = response.data.questions
      this.setState({qustionData:response.data.questions});
      console.log("questiondata",qustionData)  
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  nextQuestionHandler =() =>{

     let questionListBlock = '';
    // 
    // const ques_map = this.state.qustionData.map((ques,index) => {
    //   //console.log("quessddatataaaaa",ques)
    //   console.log("quessddatataaaaa",ques.QuestionNo)
    //   console.log("quessddatataaaaa",ques.Question)
    //  return(
    //     <QuestionSet key={ques.QuestionNo} id={ques.QuestionNo} question={ques.Question} />
    //   );
    //  });
     
    //   this.setState({ques_map:ques_map});
    //  console.log("QuestionSet------------------------",QuestionSet)
    // console.log("ques_map*************",ques_map)
  }

 render() {
 let qustionData = this.state.qustionData;
 console.log("qustionData*************",qustionData);

  qustionData = qustionData.map((ques, index) => {
            return (
                <QuestionSet key={ques.QuestionNo} id={ques.QuestionNo} question={ques.Question} options={ques.options}/>
            );
        });
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
              {qustionData}
             
          {/* <Form>
                    <fieldset>
                      <Form.Group as={Row}>
                        <Col md={10} xs={12} className="radio">
                          <Form.Check
                            type="radio"
                            label="Option 1"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            value="option1"
                          />
                        </Col>
                        <Col md={10} xs={12} className="radio bg-success">
                          <Form.Check
                            type="radio"
                            label="Option 2"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            value="option2"

                          />
                        </Col>
                        <Col md={10} xs={12} className="radio">
                          <Form.Check
                            type="radio"
                            label="Option 3"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            value="option3"
                          />
                        </Col>
                        <Col md={10} xs={12} className="radio">
                          <Form.Check
                            type="radio"
                            label="Option 4"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            value="option4"
                          />
                        </Col>

                      </Form.Group>
                    </fieldset>

                  </Form> */}
                  <div className="clearfix"></div>
                  <Col md={6} className="text-left nopadding">
                    <Button variant="primary"><i className="fa fa-angle-left"></i> Previous</Button>
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