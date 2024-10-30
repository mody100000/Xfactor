import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../store/reducers/themeSlice";
import CoachApplicationNavbar from "../../components/CoachApplicationNavbar/CoachApplicationNavbar";

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
    <CoachApplicationNavbar theme={theme} toggleTheme={() => dispatch(toggleTheme())} />
    <Outlet />
  </>);
}

export default CoachApplicationLayout;