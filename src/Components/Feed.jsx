import React from 'react'
import Post from './Post'
import NewPost from './NewPost'
const Feed = ({posts}) => {
  return (
    <>
    {posts.map((posts)=>
    <Post
    key = {posts.id} posts ={posts}
    />
    )}
    </>
  )
}

export default Feed