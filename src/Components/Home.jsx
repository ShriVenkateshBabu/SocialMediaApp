import React from 'react'
import Feed from './Feed'

const Home = ({posts,postBody,postTitle,setPostBody,setPostTitle,handlesubmit}) => {
  return (
    <main className='Home'>
  { posts.length ?(
      <Feed posts={posts}
      postBody={postBody}
      postTitle={postTitle}
      setPostBody={setPostBody}
      setPostTitle={setPostTitle}
      handlesubmit={handlesubmit}
      />
    ):(
        <p style={{marginTop:"32px"}}>No Posts to display</p>
    )
  } 
    </main>
  )
}

export default Home