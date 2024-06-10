import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import styles from './CoachApplicationTimeline.module.css';
import ApplyToCoachForm from './../../components/ApplyToCoach/ApplyToCoachForm';
import TrainingOptions from './../TrainingOptions/TrainingOptions';
import QuestionsPage1 from './../QuestionsPage1/QuestionsPage1';
import QuestionsPage2 from './../QuestionsPage2/QuestionsPage2';
import QuestionsPage3 from './../QuestionsPage3/QuestionsPage3';

const CoachApplicationTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { component: <ApplyToCoachForm onNext={() => handleNextStep()} /> },
    { component: <TrainingOptions onNext={() => handleNextStep()} /> },
    { component: <QuestionsPage1 onNext={() => handleNextStep()} /> },
    { component: <QuestionsPage2 onNext={() => handleNextStep()} /> },
    { component: <QuestionsPage3 onNext={() => handleNextStep()} /> }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <ProgressBar now={(currentStep / (steps.length - 1)) * 100} className={styles.timelineProgress} />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.timelineContent}>
            {steps[currentStep].component}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button onClick={handlePrevStep} disabled={currentStep === 0} className="btn btn-secondary m-2">Previous</Button>
          <Button onClick={handleNextStep} disabled={currentStep === steps.length - 1} className="btn btn-primary m-2">Next</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CoachApplicationTimeline;
