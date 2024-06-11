import { Outlet } from "react-router-dom";
import LogoutNav from "../../components/LandingNav/LandingNav";

const CoachApplicationLayout = () => {
    return ( <>
      <LogoutNav/>
      <Outlet/>
    </> );
}
 
export default CoachApplicationLayout;