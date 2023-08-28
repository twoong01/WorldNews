import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    country: 'us',
    category: null,
    article_list: [],
    article_tc_list: [],
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setArticleList: (state, action) => {
      state.article_list = action.payload;
    },
    setArticleTCList: (state, action) => {
      state.article_tc_list = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCountryReset: (state) => {
      state.country = 'us';
    },
    setCategoryReset: (state) => {
      state.category = null;
    },
  },
});

export const {
  setArticleList,
  setArticleTCList,
  setCountry,
  setCategory,
  setCountryReset,
  setCategoryReset,
} = articleSlice.actions;
export default articleSlice.reducer;
