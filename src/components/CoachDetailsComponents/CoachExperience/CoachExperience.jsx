import React, { useState } from 'react';
import { Container, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import styles from './CoachExperience.module.css';

const CoachExperience = ({ coach }) => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabContent = {
    experience: coach.experience,
    highlights: coach.highlights,
    plan: coach.plan
  };

  const isMobile = window.innerWidth <= 500;

  return (
    <Container className={styles.coachProfile}>
      <h2 className={styles.title}>More About Coach {coach.name}</h2>
      {isMobile ? (
        <Dropdown>
          <Dropdown.Toggle className={styles.customDropdownToggle}>
            {activeTab === coach.experience && 'Coach Experience'}
            {activeTab === 'highlights' && 'Athletic Highlights'}
            {activeTab === 'plan' && 'Session Plan'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => setActiveTab('experience')}
            >
              Coach Experience
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setActiveTab('highlights')}
            >
              Athletic Highlights
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setActiveTab('plan')}
            >
              Session Plan
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Nav variant="pills" className={styles.nav}>
          <Nav.Item>
            <button
              className={`${styles.leftBtn} ${activeTab === 'experience' ? styles.activeTab : styles.tab}`}
              onClick={() => setActiveTab('experience')}
            >
              Coach Experience
            </button>
          </Nav.Item>
          <Nav.Item>
            <button
              className={activeTab === 'highlights' ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab('highlights')}
            >
              Athletic Highlights
            </button>
          </Nav.Item>
          <Nav.Item>
            <button
              className={`${styles.rightBtn} ${activeTab === 'plan' ? styles.activeTab : styles.tab}`}
              onClick={() => setActiveTab('plan')}
            >
              Session Plan
            </button>
          </Nav.Item>
        </Nav>
      )}
      <Row>
        <Col>
          <div className={styles.content}>
            {tabContent[activeTab]}
          </div>
        </Col>
      </Row>
      <span className={styles.line}></span>
    </Container>
  );
};

export default CoachExperience;
