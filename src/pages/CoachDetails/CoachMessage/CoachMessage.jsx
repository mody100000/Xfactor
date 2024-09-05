import { useParams } from "react-router-dom";
import styles from "./CoachMessage.module.css"
import { useSelector } from "react-redux";
import MainCoachMessage from "../../../components/CoachDetailsComponents/CoachMessageComponents/MainCoachMessage/MainCoachMessage";
import MessageCoachSidebar from "../../../components/CoachDetailsComponents/CoachMessageComponents/MessageCoachSidebar/MessageCoachSidebar";

const CoachMessage = () => {
    const { id } = useParams();
    const coach = useSelector((state) => state.coaches.list.find((coach) => coach.id === parseInt(id)));
    return (
        <div className={`container-fluid ${styles.coachContainer}`}>
            <div className="row">
                <div className="col-md-8 col-12 order-md-1">
                    <div className="row">
                        {/* <MainCoachDetails coach={coach} /> */}
                        <MainCoachMessage coach={coach} />
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3">
                    <MessageCoachSidebar />
                </div>
            </div>
        </div>
    );
}

export default CoachMessage;