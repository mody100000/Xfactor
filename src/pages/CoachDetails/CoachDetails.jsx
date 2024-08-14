import { useParams } from "react-router-dom";
import MainCoachDetails from "../../components/CoachDetailsComponents/MainCoachDetails/MainCoachDetails";
import styles from "./CoachDetails.module.css"
import { useSelector } from "react-redux";
import CoachSidebar from "../../components/CoachDetailsComponents/CoachSidebar/CoachSidebar";

const CoachDetails = () => {
    const { id } = useParams();
    const coach = useSelector((state) => state.coaches.list.find((coach) => coach.id === parseInt(id)));

    if (!coach) {
        return <div className={styles.container}>Coach not found</div>;
    }

    return (
        <div className={`container-fluid ${styles.coachContainer}`}>
            <div className="row">
                <div className="col-md-8 col-12 order-md-1">
                    <div className="row">
                        <MainCoachDetails coach={coach} />
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3">
                    <CoachSidebar coach={coach} />
                </div>
            </div>
        </div>
    );
}

export default CoachDetails;