import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../tweets/features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})