import { createSlice } from '@reduxjs/toolkit';

const coachesSlice = createSlice({
  name: 'coaches',
  initialState: {
    list: [], // This will store the list of coaches
    sport: '',
    address: ''
  },
  reducers: {
    setCoaches: (state, action) => {
      state.list = action.payload;
    },
    setSport: (state, action) => {
      state.sport = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setCoaches, setSport, setAddress } = coachesSlice.actions;
export default coachesSlice.reducer;
