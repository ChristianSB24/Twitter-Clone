import { sub } from 'date-fns'
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../../api/client'
import { apiTweetList, apiTweetFeed } from '../../lookup'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async user => {
  const initialUser = { user }
  console.log(initialUser.user)
  let response
  if (initialUser.user != undefined){
    console.log('here')
    response = await fetch(
      `http://localhost:8000/api/tweets/?username=${initialUser.user}`
    )
  } 
  else {
    console.log('there')
    response = await fetch(
      `http://localhost:8000/api/tweets`
    );
  }
  console.log(response)
  const data = await response.json();
  console.log(data.results)
  return data.results
})

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postAdded: {
        reducer(state, action) {
          state.posts.push(action.payload)
        },
        prepare(title, content, userId) {
          return {
            payload: {
              id: nanoid(),
              date: new Date().toISOString(),
              title,
              content,
              user: userId
            }
          }
        }
      },
      postUpdated(state, action) {
        const { id, title, content } = action.payload
        const existingPost = state.posts.find(post => post.id === id)
        if (existingPost) {
          existingPost.title = title
          existingPost.content = content
        }
      }
    },
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        state.status = 'loading'
      },
      [fetchPosts.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      },
      [fetchPosts.rejected]: (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      }
    },

})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

export const selectAllPosts = state => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)

  """ Testing Git contributions """