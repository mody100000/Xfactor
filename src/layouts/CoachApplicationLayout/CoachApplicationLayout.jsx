import { Outlet } from "react-router-dom";
import ApplicationNavbar from "../../components/ApplicationNavbar/ApplicationNavbar";
import LogoutNav from '../../components/LandingNav/LandingNav';
import { useEffect, useState } from "react";

const CoachApplicationLayout = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (<>
    {/* <ApplicationNavbar/> */}
    <LogoutNav toggleTheme={toggleTheme} />
    <Outlet />
  </>);
}

export default CoachApplicationLayout;