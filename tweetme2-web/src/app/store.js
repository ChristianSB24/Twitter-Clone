import { configureStore } from '@reduxjs/toolkit'

// import postsReducer from '../tweets/features/posts/postsSlice'
// import usersReducer from '../tweets/features/users/usersSlice'
import postsReducer from '../tweets/features/posts/postsSlice2'
import usersReducer from '../tweets/features/users/usersSlice2'

export default configureStore({
  reducer: {
    // posts: postsReducer,
    // users: usersReducer,
    posts: postsReducer,
    users: usersReducer
  }
})