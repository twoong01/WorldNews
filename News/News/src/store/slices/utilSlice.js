import { createSlice } from '@reduxjs/toolkit';

export const utilSlice = createSlice({
  name: 'util',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = utilSlice.actions;
export default utilSlice.reducer;
