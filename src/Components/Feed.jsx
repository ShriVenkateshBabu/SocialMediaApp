import React from 'react'
import Post from './Post'
import NewPost from './NewPost'
const Feed = ({posts,postBody,postTitle,setPostBody,setPostTitle,handlesubmit}) => {
  return (
    <>
    {posts.map((posts)=>
    <Post
    key = {posts.id} posts ={posts}
    />
    )}
    <>
    <NewPost
     postBody={postBody}
     postTitle={postTitle}
     setPostBody={setPostBody}
     setPostTitle={setPostTitle}
     handlesubmit={handlesubmit}
     />
    </>
    </>
  )
}

export default Feed