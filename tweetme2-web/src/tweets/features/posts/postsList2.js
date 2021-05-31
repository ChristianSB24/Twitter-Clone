import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { TimeAgo } from './TimeAgo'
import { PostAuthor } from './PostAuthor'
import { selectAllPosts, fetchPosts } from './postsSlice2'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  console.log(posts)

  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    const myCallback = (response, status) => {
    if (status === 200){
        posts = response.results
        console.log(response.results)

        } else {
        alert("There was an error")
        }
    }
    if (postStatus === 'idle') {
      dispatch(fetchPosts({username: 'christian', callback: myCallback}))
    }
  }, [postStatus, dispatch])
  console.log(posts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    )
  })
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}