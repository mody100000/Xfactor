import React from 'react';
import TrainingLocations from '../../../components/CoachDashboardComponents/CoachProfileComponents/TrainingLocations/TrainingLocations';
import MyServices from '../../../components/CoachDashboardComponents/CoachProfileComponents/MyServices/MyServices';
import MoreAboutYou from '../../../components/CoachDashboardComponents/CoachProfileComponents/MoreAboutYou/MoreAboutYou';
import Reviews from '../../../components/CoachDashboardComponents/CoachProfileComponents/Reviews/Reviews';
import TravelPreferences from '../../../components/CoachDashboardComponents/CoachProfileComponents/TravelPreferences/TravelPreferences';
import MyCredentials from '../../../components/CoachDashboardComponents/MyCredentials/MyCredentials';
import CoachProfileCard from '../../../components/CoachDashboardComponents/CoachProfileComponents/CoachProfileCard/CoachProfileCard';
import ShareExperience from '../../../components/CoachDashboardComponents/CoachProfileComponents/Modals/ShareExperience/ShareExperience';

function CoachDashboardProfile() {

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

export default CoachDashboardProfile;
