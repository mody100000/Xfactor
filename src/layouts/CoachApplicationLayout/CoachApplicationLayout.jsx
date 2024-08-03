import { Outlet } from "react-router-dom";
import LogoutNav from '../../components/LandingNav/LandingNav';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../store/reducers/themeSlice";

const CoachApplicationLayout = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    dispatch(setTheme(savedTheme))
    document.body.className = savedTheme
  }, [dispatch])

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme)
  }, [theme]);


  return (<>
    <LogoutNav theme={theme} toggleTheme={() => dispatch(toggleTheme())} />
    <Outlet />
  </>);
}

export default CoachApplicationLayout;