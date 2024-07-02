import styles from "./MainFAQ.module.css"
import { useState } from "react";
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { BsArrowDownRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const MainFAQ = () => {
    const [expanded, setExpanded] = useState({});

    const navigate = useNavigate()

    const handleBtnNavigate = ()=>{
        navigate("/contactUs")
    }

    const handleSignInNavigate = ()=>{
        navigate("/login")
    }

    const toggleExpand = (id) => {
      setExpanded((prev) => ({
        ...prev,
        [id]: !prev[id]
      }));
    };
  
    return ( 
    <div className={styles.quations}>
         <div className="row">
             <div className="col-12">
             <div className={styles.questionCard}>
                <h3 className={styles.questionTitle}>Have a question or need training advice?</h3>
                <button className={styles.askBtn} onClick={handleBtnNavigate}>Ask A Quations</button>
                <p className={styles.supTitle}>CoachUp Coaches, <span className="text-danger" onClick={handleSignInNavigate} style={{ cursor: "pointer" }}>Sign in</span> to answer questions</p>
             </div>
             </div>
          
        {quations.map(quation => (
          <div className="col-12 mb-3" key={quation.id}>
            <div className={`${styles.courseCard} card`}>
              <div className={`${styles.cardBody}`}>
                <div className={styles.titles}>
                  <div>
                    <h2 className={styles.courseTitle}>{quation.title}</h2>
                    {/* <p className={styles.courseSubtitle}>{quation.subtitle}</p> */}
                  </div>
                  <button className={`btn ${styles.expandBtn}`} onClick={() => toggleExpand(quation.id)}>
                    {expanded[quation.id] ? <BsArrowUpRightCircle color="#DC3545" size={25} /> : <BsArrowDownRightCircle color="#DC3545"  size={25} />}
                  </button>
                </div>
                <div className={`d-flex justify-content-between align-items-end mt-auto ${styles.tagsAndLastSeen}`}>
                </div>
                {expanded[quation.id] && (
                  <div className={`${styles.expandedContent} border-top mt-4`}>
                    <p className="mt-1 pt-2">{quation.subtitle}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     );
}
 
export default MainFAQ;

const quations = [
    {
      id: 1,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    {
      id: 2,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    {
      id: 3,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    {
      id: 4,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    {
      id: 5,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    {
      id: 6,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    {
      id: 7,
      title: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      subtitle: '"I am a football player who would like to develop their match fitness, what can drills can I do and how often do I do thm" ?',
      tags: ['Design Management', 'Innovation'],
      lastSeen: '2 Feb, 2024',
    },
    // More course objects here
  ];