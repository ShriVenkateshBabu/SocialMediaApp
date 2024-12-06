import React, { useContext } from 'react'
import Post from './Post'
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