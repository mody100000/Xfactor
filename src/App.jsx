import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoaches } from "./store/reducers/coachesSlice";
import { setAddress, setSport } from "./store/features/coachSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Landing from "./pages/Landing/Landing";
import ApplyToCoachPage from "./pages/ApplyToCoachPage/ApplyToCoachPage";
import TrainingOptions from "./pages/TrainingOptions/TrainingOptions";
import QuestionsPage1 from './pages/QuestionsPage1/QuestionsPage1';
import QuestionsPage2 from './pages/QuestionsPage2/QuestionsPage2';
import QuestionsPage3 from './pages/QuestionsPage3/QuestionsPage3';
import CoachesResultPage from './pages/CoachesResultPage/CoachesResultPage';
import FilteredCoachesResultPage from './pages/FilteredCoachesResultPage/FilteredCoachesResultPage';
import CoachProfilePage from './pages/CoachProfilePage/CoachProfilePage';
import CoachProfile from './pages/CoachProfile/CoachProfile';

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, path: "", element: <Landing /> },
      { path: "applyToCoach", element: <ApplyToCoachPage /> },
      { path: "training-options", element: <TrainingOptions /> },
      { path: "/questions1", element: <QuestionsPage1 /> },
      { path: "questions2", element: <QuestionsPage2 /> },
      { path: "questions3", element: <QuestionsPage3 /> },
      { path: "coaches", element: <CoachesResultPage /> },
      { path: '/filtered-coaches', element: <FilteredCoachesResultPage /> },
      { path: '/coach/:id', element: <CoachProfilePage /> },
      { path: '/coach/:id', element: <CoachProfile /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

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

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
