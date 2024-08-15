import React, { useState } from 'react';
import { Container, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import styles from './CoachExperience.module.css';

const CoachExperience = ({ coach }) => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabContent = {
    experience: "I have played sports like baseball, football, basketball and boxing. I have played football from age 8 up to age 18, were I learned to play both side of the ball. I have played youth and semi pro football. I have been coaching football on two levels one as a semi pro and the other as a youth coach. I started coaching semi pro in 1994 up until 2007. and I started coaching youth football in 1996. at both levels I coach defense , I attend Glazer football Clinic an I'm USA coach certified. I still coach youth football now for the Linden Tigers. I also coach baseball for the linden PAL , which I have been doing for 3years now. Before than II coached in East Orange Little League two years, and Newark Little League for 3 years. I now have my own double A adult baseball team which has play in 3 se",
    highlights: "Won 5 championship and 6 division championship these are with both semi pro and youth football. I have some of my players go on to play in the NFL and a few other play arena football.l I have taught players skill and technique to help them develop in this sport they play.. I also know Baseball, basketball, and boxing as well.",
    plan: "First I will talk to my client to see where he/ she is having problem or need up. After that I will have him or her warm up than we will go through some drill. than we will work on the problem, Than we will put everything together.exploding out of your stand to receive the ball . Than we will work on the receiving the ball from the quarterback. Learn the holes and the different way offensive use them. You will learn how to come out of the back field, running your ro out of the back field.utes to catch a pass."
  };

  const isMobile = window.innerWidth <= 500;

  return (
    <Container className={styles.coachProfile}>
      <h2 className={styles.title}>More About Coach {coach.name}</h2>
      {isMobile ? (
        <Dropdown>
          <Dropdown.Toggle className={styles.customDropdownToggle}>
            {activeTab === 'experience' && 'Coach Experience'}
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
