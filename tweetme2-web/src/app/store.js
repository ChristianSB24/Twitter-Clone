import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../tweets/features/posts/postsSlice'
import usersReducer from '../tweets/features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})