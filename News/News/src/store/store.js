import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './slices/articleSlice';
import topSlice from './slices/topSlice';
import utilSlice from './slices/utilSlice';

export default configureStore({
  reducer: {
    article: articleSlice,
    top: topSlice,
    util: utilSlice,
  },
});
