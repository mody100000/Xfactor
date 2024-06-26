import styles from "./PopularSports.module.css"
import Scocer from "../../../assets/Scocer.jpg";
import Lacrosse from "../../../assets/Lacrosse.jpg";
import Baseball from "../../../assets/Baseball.jpg";
import Basketball from "../../../assets/Basketball.jpg";
import { useNavigate } from 'react-router-dom';

const PopularSports = () => {
    const navigate = useNavigate()

    const handleNavigate =()=>{
        navigate("/contactUs")
    }
    return ( 
        <div className={styles.container}>
             <h2 className={styles.title}>Browse Our Popular Sports</h2>
             <p className={styles.text}>There are many benefits for athletes and coaches who join the CoachUp community:</p>
             <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Scocer} alt="Scocer" className={styles.img} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Scocer</h2>
                                <p className={styles.itemText}>Dribbling, Goal Kicks, Shooting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Lacrosse} alt="Lacrosse" className={styles.img} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Lacrosse</h2>
                                <p className={styles.itemText}>Dodging, Faceoffs, Shooting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Baseball} alt="Baseball" className={styles.img} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Baseball</h2>
                                <p className={styles.itemText}>Baserunning, Fielding, Pitching</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className={styles.item}>
                            <img src={Basketball} alt="Basketball" className={styles.img} />
                            <div className={styles.info}>
                                <h2 className={styles.itemTitle}>Basketball</h2>
                                <p className={styles.itemText}>Dribbling, Guarding, Shooting</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <h2 className={`${styles.title} mt-5`}>Have Questions?</h2>
             <p className={styles.lastText}>Our Support Team can help!</p>
             <button className={styles.contactBtn} onClick={handleNavigate}>Contact Us</button>
        </div>
     );
}
 
export default PopularSports;