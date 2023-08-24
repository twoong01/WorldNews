import { createSlice } from '@reduxjs/toolkit';

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    article_list: [],
    article_tc_list: [],
  },
  reducers: {
    setArticleList: (state, action) => {
      state.article_list = action.payload;
    },
    setArticleTCList: (state, action) => {
      state.article_tc_list = action.payload;
    },
  },
});

export const { setArticleList, setArticleTCList } = articleSlice.actions;
export default articleSlice.reducer;
