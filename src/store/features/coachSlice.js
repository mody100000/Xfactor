import { createSlice } from '@reduxjs/toolkit';

const coachSlice = createSlice({
  name: 'coach',
  initialState: {
    sport: '',
    address: ''
  },
  reducers: {
    setSport: (state, action) => {
      state.sport = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setSport, setAddress } = coachSlice.actions;

export default coachSlice.reducer;
