import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './CoachApplicationTimeline.module.css';
import QuestionsPage1 from './../QuestionsPage1/QuestionsPage1';
import QuestionsPage2 from './../QuestionsPage2/QuestionsPage2';
import QuestionsPage3 from './../QuestionsPage3/QuestionsPage3';
import ImageBackground from '../../components/common/ImageBackground/ImageBackground';

const CoachApplicationTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { component: QuestionsPage1 },
    { component: QuestionsPage2 },
    { component: QuestionsPage3 }
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

  const StepComponent = steps[currentStep].component;

  return (
    <>
      <ImageBackground>
        <Container className="d-flex justify-content-center align-items-center">
          <div className={styles.contentWrapper}>
            <Row>
              <Col>
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={currentStep}
                    timeout={300}
                    classNames={{
                      enter: styles.pageEnter,
                      enterActive: styles.pageEnterActive,
                      exit: styles.pageExit,
                      exitActive: styles.pageExitActive,
                    }}
                    unmountOnExit
                  >
                    <div className={styles.timelineContent}>
                      <StepComponent
                        currentStep={currentStep}
                        handleNextStep={handleNextStep}
                        handlePrevStep={handlePrevStep}
                        totalSteps={steps.length}
                      />
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </Col>
            </Row>
          </div>
        </Container>
      </ImageBackground>
    </>
  );
};

export default CoachApplicationTimeline;
