import { createSlice } from "@reduxjs/toolkit";

export const topSlice = createSlice({
  name: 'top',
  initialState: {
    article_list: [],
  },
  reducers: {
    setTopArticle: (state, action) => {
      state.article_list = action.payload
    }
  }
});

export const { setTopArticle } = topSlice.actions;
export default topSlice.reducer; 