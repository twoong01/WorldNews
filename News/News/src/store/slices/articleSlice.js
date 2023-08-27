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
  },
});

export const { setArticleList, setArticleTCList, setCountry, setCategory } =
  articleSlice.actions;
export default articleSlice.reducer;
