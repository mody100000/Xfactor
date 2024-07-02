import React, { useState, useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import LogoutNav from './../../components/LandingNav/LandingNav';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <LogoutNav toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default MainLayout;
