import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CoachApplicationTimeline.module.css';
import QuestionsPage1 from './../QuestionsPage1/QuestionsPage1';
import QuestionsPage2 from './../QuestionsPage2/QuestionsPage2';
import QuestionsPage3 from './../QuestionsPage3/QuestionsPage3';
import ImageBackground from '../../components/common/ImageBackground/ImageBackground';

const CoachApplicationTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const steps = [
    { component: QuestionsPage1 },
    { component: QuestionsPage2 },
    { component: QuestionsPage3 }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const StepComponent = steps[currentStep].component;

  const slideFromRight = direction == 1;
  const exitAnimation = slideFromRight ? "-100%" : "100%"
  const finalAnimate = 0
  return (
    <>
      <ImageBackground>
        <Container className="d-flex justify-content-center align-items-center">
          <div className={styles.contentWrapper}>
            <Row>
              <Col>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentStep}
                    initial={{ x: exitAnimation, opacity: 0 }}
                    animate={{ x: finalAnimate, opacity: 1 }}
                    exit={{ x: exitAnimation, opacity: 0, position: "absolute" }}
                    transition={{
                      x: { type: 'spring', duration: 1, restDelta: 1 },
                      opacity: { duration: 0.5 }
                    }}
                    className={styles.timelineContent}
                  >
                    <StepComponent
                      currentStep={currentStep}
                      handleNextStep={handleNextStep}
                      handlePrevStep={handlePrevStep}
                      totalSteps={steps.length}
                    />
                  </motion.div>
                </AnimatePresence>
              </Col>
            </Row>
          </div>
        </Container>
      </ImageBackground>
    </>
  );
};

export default CoachApplicationTimeline;