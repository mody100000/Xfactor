import styles from "./Views.module.css";
import React from "react";

const achievements = [
    {id:1,numbers:"1,924",title:"Views",subtitle:"per week"},
    {id:2,numbers:305,title:"bonuses",subtitle:"for education"},
    {id:3,numbers:26,title:"courses",subtitle:"started"},
    {id:4,numbers:35,title:"courses",subtitle:"favorites"},
]

const Views = () => {
    return (
        <div className={`${styles.certificateContainer} container`}>
        {achievements.map((achievement,index)=>(
        <div key={achievement.id} className="row align-items-center justify-content-between mb-2">
        <div className="col-auto">
        <p className={styles.achievement}>
            {achievement.numbers}
             </p>
            </div>
             <div className="col-auto d-flex align-items-center justify-content-center flex-column">
            <p className={styles.title}>
            {achievement.title}
             </p>
             <span className={styles.subtitle}>{achievement.subtitle}</span>
            </div>
            {index !== achievements.length - 1 && <span className={styles.line}></span>}
            </div>))}
        </div>
      );
}
 
export default Views;