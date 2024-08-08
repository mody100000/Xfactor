import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCoaches } from "./store/reducers/coachesSlice";
import { setAddress, setSport } from "./store/features/coachSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import { MdOnlinePrediction } from "react-icons/md";

import MainLayout from "./layouts/MainLayout/MainLayout";
import Landing from "./pages/Landing/Landing";
import ApplyToCoachPage from "./pages/ApplyToCoachPage/ApplyToCoachPage";
import TrainingOptions from "./pages/TrainingOptions/TrainingOptions";
import QuestionsPage3 from './pages/QuestionsPage3/QuestionsPage3';
import CoachesResultPage from './pages/CoachesResultPage/CoachesResultPage';
import FilteredCoachesResultPage from './pages/FilteredCoachesResultPage/FilteredCoachesResultPage';
import CoachProfilePage from './pages/CoachProfilePage/CoachProfilePage';
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
      { path: '/coach/:id', element: <CoachProfilePage /> },
      { path: '/coaches/:id', element: <CoachProfile /> },
      { path: 'CoachDetails', element: <CoachDetails /> },
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


    ]
  },
]);

function App() {
  const dispatch = useDispatch();
  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };
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
