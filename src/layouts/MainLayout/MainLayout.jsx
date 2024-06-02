import { Outlet } from 'react-router-dom';
import LogoutNav from './../../components/LandingNav/LandingNav';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
    return ( <>
      <LogoutNav/>
      <Outlet/>
      <Footer/>
    </> );
}
 
export default MainLayout;