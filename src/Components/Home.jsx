import React from 'react'
import Feed from './Feed'

const Home = ({posts,error,isLoading}) => {
  return (
    <main className='Home'>
   {isLoading  && <h1 
   className="statusMsg"
   >loading</h1>}
   {error && <h1>error</h1>}
  {!error && !isLoading && posts.length ?(
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