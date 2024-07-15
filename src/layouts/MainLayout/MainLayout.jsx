import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutNav from './../../components/LandingNav/LandingNav';
import Footer from '../../components/Footer/Footer';
import { setTheme, toggleTheme } from '../../store/reducers/themeSlice';

const MainLayout = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
    dispatch(setTheme(localStorage.getItem('theme') || 'dark'));
  }, [theme, dispatch]);

  return (
    <>
      <LogoutNav toggleTheme={() => dispatch(toggleTheme())} />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default MainLayout;
