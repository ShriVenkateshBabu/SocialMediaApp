import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
const Post = ({posts}) => {
  return (
   <>
   <article className='post'>
   <Link to ={`posts/${posts.id}`}>
   <h2>{posts.title}</h2>
    <div className='postDate'>{posts.datetime}</div>
    </Link>
    <div className='postBody'>
      {(posts.body).length <= 25 ?posts.body: (posts.body).slice(0,25)}
    </div>
    
    </article>
    
    </>
    
   
)}

export default Post