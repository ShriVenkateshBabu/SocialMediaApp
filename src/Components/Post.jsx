import React from 'react'
import NewPost from './NewPost'

const Post = ({posts}) => {
  return (
   <>
   <article className='post'>
    <h2>{posts.title}</h2>
    <div className='postDate'>{posts.datetime}</div>
    <div className='postBody'>
      {(posts.body).length <= 25 ?posts.body: (posts.body).slice(0,25)}
    </div>
    
    </article>
    
    </>
    
   
)}

export default Post