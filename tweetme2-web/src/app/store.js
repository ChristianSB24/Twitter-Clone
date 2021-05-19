import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../tweets/features/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})