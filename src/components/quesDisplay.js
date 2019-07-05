import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'

const QuestionSet = (props) => (

<div className="Questionsdiv">
     <Col sm={12} lg={8} xs={12} className="question-number col-centered">
	Total Questions : <span>{props.totalquestions} </span>
	</Col>
    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-centered questionText">Q.{props.id}. {props.question} </div>
</div>

);

export default QuestionSet;

