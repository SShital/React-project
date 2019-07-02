import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'

const QuestionSet = (props) => (

<div className="Questionsdiv">
     <Col xs="6" className="question-number grey-font font14">
	Question:<span>{props.id}</span>
	</Col>
       <div className="questionText">{props.question} </div>
</div>

);

export default QuestionSet;