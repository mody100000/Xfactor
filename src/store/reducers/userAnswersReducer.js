import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionFor: '',
  sessionCount: '',
  age: '',
  gender: '',
  coachGenderPreference: '',
};

const userAnswersSlice = createSlice({
  name: 'userAnswers',
  initialState,
  reducers: {
    setSessionFor: (state, action) => {
      state.sessionFor = action.payload;
    },
    setSessionCount: (state, action) => {
      state.sessionCount = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setCoachGenderPreference: (state, action) => {
      state.coachGenderPreference = action.payload;
    },
  },
});

export const {
  setSessionFor,
  setSessionCount,
  setAge,
  setGender,
  setCoachGenderPreference,
} = userAnswersSlice.actions;

export default userAnswersSlice.reducer;
