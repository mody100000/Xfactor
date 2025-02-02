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
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(savedTheme));
    document.body.className = savedTheme;
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <LogoutNav theme={theme} toggleTheme={() => dispatch(toggleTheme())} />
      <Outlet />
      <Footer theme={theme} />
      <ScrollRestoration />
    </>
  );
}

export default MainLayout;
