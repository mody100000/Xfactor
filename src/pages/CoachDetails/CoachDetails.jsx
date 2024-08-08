import MainCoachDetails from "../../components/CoachDetailsComponents/MainCoachDetails/MainCoachDetails";
import FilterFAQ from "../../components/FAQComponents/FilterFAQ/FilterFAQ";
import styles from "./CoachDetails.module.css"
const CoachDetails = () => {
    return (
        <div className={`container-fluid ${styles.coachContainer}`}>
            <div className="row">
                <div className="col-md-8 col-12 order-md-1">
                    <div className="row">
                        <MainCoachDetails />
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3">
                    <FilterFAQ />
                </div>
            </div>
        </div>
    );
}

export default CoachDetails;