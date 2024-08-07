import Benefits from "../../components/CoachUpComponents/Benefits/Benefits";
import CoachUpCarts from "../../components/CoachUpComponents/IntroCoachUp/CoachUpCarts/CoachUpCarts";
import IntroCoachUp from "../../components/CoachUpComponents/IntroCoachUp/IntroCoachUp";
import PopularSports from "../../components/CoachUpComponents/PopularSports/PopularSports";
import Testimonials from "../../components/CoachUpComponents/Testimonials/Testimonials";
import TrainingTypes from "../../components/CoachUpComponents/TrainingTypes/TrainingTypes";

const CoachUp = () => {
    return (<div className="overflow-hidden">
        <IntroCoachUp />
        <CoachUpCarts />
        <TrainingTypes />
        <Testimonials />
        <Benefits />
        <PopularSports />
    </div>);
}

export default CoachUp;