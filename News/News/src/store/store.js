import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './slices/articleSlice';
import topSlice from './slices/topSlice';

export default configureStore({
  reducer: {
    article: articleSlice,
    top: topSlice,
  },
});
