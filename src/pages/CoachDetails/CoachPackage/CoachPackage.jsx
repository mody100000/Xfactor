import { useParams } from "react-router-dom";
import styles from "./CoachPackage.module.css";
import { useSelector } from "react-redux";
import CoachPackageSidebar from "../../../components/CoachDetailsComponents/CoachPackageComponets/CoachPackageSidebar/CoachPackageSidebar";
import MainCoachPackage from "../../../components/CoachDetailsComponents/CoachPackageComponets/MainCoachPackage/MainCoachPackage";

const CoachPackage = () => {
    const { id, packageId } = useParams(); // Get coachId and packageId from the URL
    const coach = useSelector((state) => state.coaches.list.find((coach) => coach.id === parseInt(id)));

    const packages = coach?.packages || [];
    const selectedPackage = packages.find(pkg => pkg.id === parseInt(packageId));

    if (!coach) {
        return <p>Loading coach data...</p>;
    }

    if (!selectedPackage) {
        return <p>Package not found.</p>
    }

    return (
        <div className={`container-fluid ${styles.coachContainer}`}>
            <div className="row">
                <div className="col-md-8 col-12 order-md-1">
                    <div className="row">
                        <MainCoachPackage selectedPackage={selectedPackage} />
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3">
                    <CoachPackageSidebar coach={coach} />
                </div>
            </div>
        </div>
    );
};

export default CoachPackage;
