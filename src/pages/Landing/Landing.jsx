import BMICalculator from "../../components/BMICalculator/BMICalculator";
import Callout from "../../components/Callout/Callout";
import FeatureCards from "../../components/FeatureCards/FeatureCards";
import Features from "../../components/Features/Features";
import FitnessGallery from "../../components/FitnessGallery/FitnessGallery";
import IntroBanner from "../../components/IntroBanner/IntroBanner";
import OurTrainers from "../../components/OurTrainers/OurTrainers";
import Plans from "../../components/Plans/Plans";
import PopularClasses from "../../components/PopularClasses/PopularClasses";
import Testimonials from "../../components/Testimonials/Testimonials";
import WorkoutCarousel from "../../components/WorkoutCarousel/WorkoutCarousel";

const Landing = () => {
    return ( <>
      <IntroBanner />
      <Features />
      <FeatureCards />
      <WorkoutCarousel />
      <PopularClasses />
      <Callout />
      <Plans />
      <BMICalculator />
      <FitnessGallery />
      <Testimonials />
      <OurTrainers />
    </> );
}
 
export default Landing;