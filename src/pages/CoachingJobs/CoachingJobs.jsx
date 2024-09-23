import React from 'react'
import IntroCoachingJobs from '../../components/CoachingJobsComponents/IntroCoachingJobs/IntroCoachingJobs'
import CoachUpProvides from '../../components/CoachingJobsComponents/CoachUpProvides/CoachUpProvides';
import HighestJobs from '../../components/CoachingJobsComponents/HighestJobs/HighestJobs';

function CoachingJobs() {
    return (
        <div className="overflow-hidden">
            <IntroCoachingJobs />
            <CoachUpProvides />
            <HighestJobs />
        </div>
    )
}

export default CoachingJobs