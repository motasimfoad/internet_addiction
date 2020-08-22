import React, {useState} from 'react';
import questionList from '../../Constant/Question';
import ScoreWizard from '../ScoreWizard';
import {Button, Col, Card, ProgressBar} from 'react-bootstrap';

function Wizard(info) {

const [question] = useState(questionList);
const [questionCounter, setQuestionCounter] = useState(0);
const [score, setScore] = useState(0);
console.log(info.info[1] + info.info[0]);
const progressPercent = questionCounter*20;

function pointKeepr(point) {
   setQuestionCounter(questionCounter+1)
   setScore(score+point);
}

  return (
    <Col className="container">
      {questionCounter <= question.length-1 ? (
        <div className="vertical-center">
          <Card>
            <Card.Body>
              <Card.Subtitle style={{textAlign:"right"}}>
                <ProgressBar variant="info" animated now={progressPercent} label={`${progressPercent}%`}/>
              </Card.Subtitle>
              <Card.Text>
                <h5>
                {question[questionCounter]}
                </h5>
              </Card.Text>
                <div>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(0)}>N/A</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(1)}>Rarely</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(2)}>Occasionally</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(3)}>Frequently</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(4)}>Often</Button>
                  <Button variant="outline-dark" onClick={()=>pointKeepr(5)}>Always</Button>
                </div>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <ScoreWizard score={score}/>
      )}

    </Col>
  );
}

export default Wizard;
