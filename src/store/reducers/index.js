import { combineReducers } from 'redux';
import coachReducer from '../features/coachSlice';
import userAnswersReducer from './userAnswersReducer';
import coachesReducer from './coachesSlice';

const rootReducer = combineReducers({
  coach: coachReducer,
  userAnswers: userAnswersReducer,
  coaches: coachesReducer,
});

export default rootReducer;
