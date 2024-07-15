import { combineReducers } from 'redux';
import coachReducer from '../features/coachSlice';
import userAnswersReducer from './userAnswersReducer';
import coachesReducer from './coachesSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
  coach: coachReducer,
  userAnswers: userAnswersReducer,
  coaches: coachesReducer,
  theme: themeReducer

});

export default rootReducer;
