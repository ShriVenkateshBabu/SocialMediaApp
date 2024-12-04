import React from 'react'
import Feed from './Feed'

const Home = ({posts,postBody,postTitle,setPostBody,setPostTitle,handlesubmit}) => {
  return (
    <main className='Home'>
  { posts.length ?(
      <Feed posts={posts}
      />
    ):(
        <p style={{marginTop:"32px"}}>No Posts to display</p>
    )
  } 
    </main>
    
  )
}

export default Home