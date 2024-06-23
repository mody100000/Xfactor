import AboutUsCard from "../../components/AboutUsComponents/AboutUsCard/AboutUsCard";
import AboutUsDetails from "../../components/AboutUsComponents/AboutUsDetails/AboutUsDetails";
import AboutUsPlans from "../../components/AboutUsComponents/AboutUsPlans/AboutUsPlans";
import IntroAboutUs from "../../components/AboutUsComponents/IntroAboutUs";
import WhyChooseUs from "../../components/AboutUsComponents/WhyChooseUs/WhyChooseUs";

const AboutUsPage = () => {
    return ( <>
    <IntroAboutUs/>
    <AboutUsDetails/>
    <WhyChooseUs/>
    <AboutUsPlans/>
    <AboutUsCard/>
    </> );
}
 
export default AboutUsPage;