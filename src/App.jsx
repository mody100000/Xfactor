import { useEffect, useState } from 'react';
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
    ],
  },
  {path:"",element:<CoachApplicationLayout />, children:[
    { path: "applyToCoach", element: <ApplyToCoachPage /> },
    { path: "ApplicationTimeline", element: <CoachApplicationTimeline /> },
    { path: "training-options", element: <TrainingOptions /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/generalRegister', element: <GeneralRegisterPage /> },

  ]},
  { path: 'dashboard', element: <DashboardLayout />,
    children:[
      {index:true, path:"/dashboard", element: <Dashboard/>},
      {path:"courses",element:<DashboardCoursesPage/>},
      {path:"courseSchedule",element:<CourseSchedulePage/>},
      {path:"assignClient",element:<AssignClientPage/>},

    ] },
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
    const sampleCoaches = [
      {
        id: 0,
        name: "John Doe",
        category: "Fitness Coach",
        rating: 5,
        reviews: 120,
        badge: "Gold",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 6.5,
        salary: 22,
        image: "../public/girl.jpg",
        recommended: true,
        trainingType: 'In-Person',
        gender: 'Male'
      },
      {
        id: 1,
        name: "leo",
        category: "Fitness Coach",
        rating: 4,
        reviews: 100,
        badge: "silver",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 5.5,
        salary: 80,
        image: "../public/Strength Coach.jpg",
        recommended: false,
        trainingType: 'Online',
        gender: 'Male'
      },
      {
        id: 2,
        name: "leo",
        category: "Fitness Coach",
        rating: 4,
        reviews: 100,
        badge: "silver",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 5.5,
        salary: 110,
        image: "../public/Strength Coach.jpg",
        recommended: false,
        trainingType: 'Online',
        gender: 'Male'
      },
      {
        id: 3,
        name: "leo",
        category: "Fitness Coach",
        rating: 4,
        reviews: 100,
        badge: "silver",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 5.5,
        salary: 60,
        image: "../public/Strength Coach.jpg",
        recommended: false,
        trainingType: 'Online',
        gender: 'Male'
      },
      {
        id: 4,
        name: "leo",
        category: "Fitness Coach",
        rating: 4,
        reviews: 100,
        badge: "Gold",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 5.5,
        salary: 50,
        image: "../public/legGroup.png",
        recommended: false,
        trainingType: 'In-Person',
        gender: 'Female'
      },
      {
        id: 5,
        name: "leo",
        category: "Fitness Coach",
        rating: 4,
        reviews: 100,
        badge: "bronze",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 5.5,
        salary: 50,
        image: "../public/legGroup.png",
        recommended: true,
        trainingType: 'Online',
        gender: 'Male'
      },
      {
        id: 6,
        name: "leo",
        category: "Fitness Coach",
        rating: 4,
        reviews: 100,
        badge: "bronze",
        summary: "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
        location:"LA",
        distance: 5.5,
        salary: 50,
        image: "../public/legGroup.png",
        recommended: true,
        trainingType: 'In-Person',
        gender: 'Female'
      },
    ];

    dispatch(setCoaches(sampleCoaches));
    dispatch(setSport('Football'));
    dispatch(setAddress('Los Angeles'));
  }, [dispatch]);

  return(
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App;
