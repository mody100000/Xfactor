import { Outlet } from "react-router-dom";
import ApplicationNavbar from "../../components/ApplicationNavbar/ApplicationNavbar";

const CoachApplicationLayout = () => {
    return ( <>
      <ApplicationNavbar/>
      <Outlet/>
    </> );
}
 
export default CoachApplicationLayout;