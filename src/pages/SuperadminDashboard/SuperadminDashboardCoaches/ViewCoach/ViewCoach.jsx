import CoachProfileCard from "../../../../components/CoachDashboardComponents/CoachProfileComponents/CoachProfileCard/CoachProfileCard";
import ShareExperience from "../../../../components/CoachDashboardComponents/CoachProfileComponents/Modals/ShareExperience/ShareExperience";
import MoreAboutYou from "../../../../components/CoachDashboardComponents/CoachProfileComponents/MoreAboutYou/MoreAboutYou";
import MyServices from "../../../../components/CoachDashboardComponents/CoachProfileComponents/MyServices/MyServices";
import Reviews from "../../../../components/CoachDashboardComponents/CoachProfileComponents/Reviews/Reviews";
import TrainingLocations from "../../../../components/CoachDashboardComponents/CoachProfileComponents/TrainingLocations/TrainingLocations";
import TravelPreferences from "../../../../components/CoachDashboardComponents/CoachProfileComponents/TravelPreferences/TravelPreferences";
import MyCredentials from "../../../../components/CoachDashboardComponents/MyCredentials/MyCredentials";

function ViewCoach() {

    return (
        <div className='p-4 p-sm-5'>
            <CoachProfileCard />
            <TravelPreferences />
            <TrainingLocations />
            <MyCredentials />
            <MyServices />
            <MoreAboutYou />
            <ShareExperience />
            <Reviews />
        </div>
    );
}

export default ViewCoach;
