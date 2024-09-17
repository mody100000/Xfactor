import { useParams } from "react-router-dom";
import styles from "./PackageCheckoutPage.module.css";
import { useSelector } from "react-redux";
import CoachPackageSidebar from "../../../components/CoachDetailsComponents/CoachPackageComponets/CoachPackageSidebar/CoachPackageSidebar";
import PackageCheckout from "../../../components/CoachDetailsComponents/CoachPackageComponets/PackageCheckout/PackageCheckout";

const PackageCheckoutPage = () => {
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
                        <PackageCheckout selectedPackage={selectedPackage} coach={coach} />
                    </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 mb-3 mt-5 mt-sm-0">
                    <CoachPackageSidebar coach={coach} />
                </div>
            </div>
        </div>
    );
};

export default PackageCheckoutPage;
