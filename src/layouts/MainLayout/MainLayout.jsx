import { Outlet, ScrollRestoration } from 'react-router-dom';
import LogoutNav from './../../components/LandingNav/LandingNav';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return ( <>
      <LogoutNav/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
    </> );
}
 
export default MainLayout;