import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoaches } from "./store/reducers/coachesSlice";
import { setAddress, setSport } from "./store/features/coachSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import MainLayout from "./layouts/MainLayout/MainLayout";
import Landing from "./pages/Landing/Landing";
import ApplyToCoachPage from "./pages/ApplyToCoachPage/ApplyToCoachPage";
import TrainingOptions from "./pages/TrainingOptions/TrainingOptions";
import QuestionsPage3 from './pages/QuestionsPage3/QuestionsPage3';
import CoachesResultPage from './pages/CoachesResultPage/CoachesResultPage';
import FilteredCoachesResultPage from './pages/FilteredCoachesResultPage/FilteredCoachesResultPage';
import CoachProfile from './pages/CoachProfile/CoachProfile';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Dashboard from './pages/DashboardProfile/Dashboard';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import DashboardCoursesPage from './pages/DashboardCoursesPage/DashboardCoursesPage';
import CoachApplicationTimeline from './pages/CoachApplicationTimeline/CoachApplicationTimeline';
import CourseSchedulePage from './pages/CourseSchedulePage/CourseSchedulePage';
import CoachApplicationLayout from './layouts/CoachApplicationLayout/CoachApplicationLayout';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactUs from './pages/ContactUsPage/ContactUs';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import IntroPage from './pages/InfoPage/IntroPage';
import CartContainer from './pages/Cart/CartContainer';
import CoachUp from './pages/CoachUp/CoachUp';
import FAQ from './pages/FAQ/FAQ';
import Blogs from './pages/Blogs/Blogs';
import Blog from './pages/Blog/Blog';
import GeneralRegisterPage from './pages/GeneralRegisterPage/GeneralRegisterPage';
import AssignClientPage from './pages/CoachDashboard/AssignClientPage/AssignClientPage';
import RegisterOptions from './pages/RegisterOptions/RegisterOptions';
import TrainerRegister from './components/Register/TrainerRegister/TrainerRegister';
import PurchasesPage from './pages/PurchasesPage/PurchasesPage';
import ChatPage from './pages/ChatPage/ChatPage';
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage';

import { sampleCoaches } from './components/CoachesData/CoachesData';
import CoachDetails from './pages/CoachDetails/CoachDetails';
import CoachMessage from './pages/CoachDetails/CoachMessage/CoachMessage';
import CoachPackage from './pages/CoachDetails/CoachPackage/CoachPackage';
import PackageCheckoutPage from './pages/CoachDetails/PackageCheckout/PackageCheckoutPage';
import CoachExperiencePage from './pages/RegisterPage/CoachExperiencePage/CoachExperiencePage';
import CoachBackgroundPage from './pages/RegisterPage/CoachBackgroundPage/CoachBackgroundPage';
import CoachProfilePage from './pages/RegisterPage/CoachProfilePage/CoachProfilePage';
import CoachPricePage from './pages/RegisterPage/CoachPricePage/CoachPricePage';
import CoachAvailabilityPage from './pages/RegisterPage/CoachAvailabilityPage/CoachAvailabilityPage';
import CoachPaymentPage from './pages/RegisterPage/CoachPaymentPage/CoachPaymentPage';
import CoachingJobs from './pages/CoachingJobs/CoachingJobs';
import CoachDashboardLayout from './layouts/CoachDashboardLayout/CoachDashboardLayout';
import MyCoachup from './pages/CoachDashboardPages/MyCoachupPage/MyCoachup';
import CoachDashboardProfile from './pages/CoachDashboardPages/CoachDashboardProfile/CoachDashboardProfile';
import CoachDashboardPackages from './pages/CoachDashboardPages/CoachDashboardPackages/CoachDashboardPackages';
import Sessions from './pages/ClientDashboard/Sessions/Sessions';
import CoachPaymentMethodPage from './pages/RegisterPage/CoachPaymentMethodPage/CoachPaymentMethodPage';
import ClientFilter from './pages/CoachDashboardPages/CoachDashboardSessions/ClientFilter';
import MainCoachSessions from './components/CoachDashboardComponents/MainCoachSessions';
import CoachDashboardClients from './pages/CoachDashboardPages/CoachDashboardClients/CoachDashboardClients';
import CoachDashboardAvailability from './pages/CoachDashboardPages/CoachDashboardAvailability/CoachDashboardAvailability';
import CoachDashboardPayments from './pages/CoachDashboardPages/CoachDashboardPayments/CoachDashboardPayments';
import CoachAccountPage from './pages/CoachDashboardPages/CoachAccountPage/CoachAccount';
import SelectChoach from './pages/CoachDashboardPages/SelectChoach/SelectChoach';
import { element } from 'prop-types';
import SuperadminDashboardLayout from './layouts/SuperadminDashboardLayout/SuperadminDashboardLayout';
import SuperadminDashboardClients from './pages/SuperadminDashboard/SuperadminDashboardClients/SuperadminDashboardClients';
import ViewClient from './pages/SuperadminDashboard/SuperadminDashboardClients/ViewClient/ViewClient';
import SuperadminDashboardCoaches from './pages/SuperadminDashboard/SuperadminDashboardCoaches/SuperadminDashboardCoaches';
import ViewCoach from './pages/SuperadminDashboard/SuperadminDashboardCoaches/ViewCoach/ViewCoach';
import ViewPackages from './pages/SuperadminDashboard/SuperadminDashboardCoaches/ViewPackages/ViewPackages';
import ViewSessions from './pages/SuperadminDashboard/SuperadminDashboardCoaches/ViewSessions/ViewSessions';
import Chat from './components/SuperadminDashboardComponents/Chat/Chat';
import ViewPayments from './pages/SuperadminDashboard/SuperadminDashboardCoaches/ViewPayments/ViewPayments';

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, path: "", element: <Landing /> },
      { path: "questions3", element: <QuestionsPage3 /> },
      { path: "coaches", element: <CoachesResultPage /> },
      { path: "AboutUs", element: <AboutUsPage /> },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "Shop", element: <Shop /> },
      { path: "Info", element: <IntroPage /> },
      { path: "Cart", element: <CartContainer /> },
      { path: "CoachUp", element: <CoachUp /> },
      { path: "FAQ", element: <FAQ /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blog", element: <Blog /> },
      { path: "Shop/product/:id", element: <ProductDetails /> },
      { path: '/filtered-coaches', element: <FilteredCoachesResultPage /> },
      { path: "/coachingJobs", element: <CoachingJobs /> },
      { path: '/coach/:id', element: <CoachDetails /> },
      { path: '/coaches/:id', element: <CoachProfile /> },
      { path: 'CoachDetails', element: <CoachDetails /> },
      { path: "/coach/:id/message", element: <CoachMessage /> },
      { path: "/coach/:id/package/:packageId", element: <CoachPackage /> },
      { path: "/coach/:id/package/:packageId/checkout", element: <PackageCheckoutPage /> }


    ],
  },
  {
    path: "", element: <CoachApplicationLayout />, children: [
      { path: "applyToCoach", element: <ApplyToCoachPage /> },
      { path: "ApplicationTimeline", element: <CoachApplicationTimeline /> },
      { path: "training-options", element: <TrainingOptions /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/generalRegister', element: <GeneralRegisterPage /> },
      { path: '/CoachExperience', element: <CoachExperiencePage /> },
      { path: '/CoachBackground', element: <CoachBackgroundPage /> },
      { path: '/CoachProfile', element: <CoachProfilePage /> },
      { path: '/CoachAvailability', element: <CoachAvailabilityPage /> },
      { path: '/CoachPaymentMethod', element: <CoachPaymentMethodPage /> },
      { path: '/CoachPayment', element: <CoachPaymentPage /> },
      { path: '/CoachPrice', element: <CoachPricePage /> },
      { path: '/registerOptions', element: <RegisterOptions /> },
      { path: '/trainerRegister', element: <TrainerRegister /> },

    ]
  },
  {
    path: 'dashboard', element: <DashboardLayout />,
    children: [
      { index: true, path: "/dashboard", element: <Dashboard /> },
      { path: "courses", element: <DashboardCoursesPage /> },
      { path: "courses/courseSchedule", element: <CourseSchedulePage /> },
      { path: "courses/CourseDetails", element: <CourseDetailsPage /> },
      { path: "/dashboard/progress", element: <CourseSchedulePage /> },
      { path: "purchases", element: <PurchasesPage /> },
      { path: "assignClient", element: <AssignClientPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "select-choach", element: <SelectChoach /> },
      { path: "select-choach/sessions", element: <Sessions /> },
      { path: "applyToCoachDashboard", element: <ApplyToCoachPage /> },
      { path: "applyTocoachOptions", element: <TrainingOptions /> }

    ]
  }, {
    path: 'coach-dashboard', element: <CoachDashboardLayout />,
    children: [
      { index: true, path: "/coach-dashboard", element: <MyCoachup /> },
      { path: "coach-profile", element: <CoachDashboardProfile /> },
      { path: "coach-Packages", element: <CoachDashboardPackages /> },
      { path: "client-filter", element: <ClientFilter /> },
      { path: "client-filter/coach-sessions", element: <MainCoachSessions /> },
      { path: "coach-clients", element: <CoachDashboardClients /> },
      { path: "coach-availability", element: <CoachDashboardAvailability /> },
      { path: "coach-payments", element: <CoachDashboardPayments /> },
      { path: "coach-account", element: <CoachAccountPage /> },
      { path: "coach-chat", element: <ChatPage /> },

    ]
  }, {
    path: "superadmin-dashboard", element: <SuperadminDashboardLayout />,
    children: [
      { index: true, path: "/superadmin-dashboard", element: <SuperadminDashboardClients /> },
      { path: "/superadmin-dashboard/view-client/:id", element: <ViewClient /> },
      { path: "coaches", element: <SuperadminDashboardCoaches /> },
      { path: "/superadmin-dashboard/coaches/view-coach/:id", element: <ViewCoach /> },
      { path: "/superadmin-dashboard/coaches/view-packages/:id", element: <ViewPackages /> },
      { path: "/superadmin-dashboard/coaches/view-sessions/:id", element: <ViewSessions /> },
      { path: "chat", element: <Chat /> },
      { path: "/superadmin-dashboard/coaches/view-payments/:id", element: <ViewPayments /> },
    ]
  }

]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCoaches(sampleCoaches));
    dispatch(setSport('Football'));
    dispatch(setAddress('Los Angeles'));
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={routes}>
      </RouterProvider>
    </>
  )
}

export default App;
