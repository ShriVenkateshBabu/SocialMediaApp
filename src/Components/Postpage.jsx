import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from "../DataContext/DataContext"
const Postpage = () => {
  const {posts,handledelete} = useContext(DataContext)
  const {id} = useParams()
  const post = posts.find((posts)=>posts.id.toString()===id)
  console.log(post)
  return (
    <main className='PostPage'>
      <article className='post'>
      {post &&
        <div>
           <h2>{post.title}</h2>
        <div className='PostDate'>{post.datetime}</div>
        <div className='PostBody'>{post.body}</div>
      <Link to= {`/edit/${post.id}`}>
       <button>
          Edit Post
        </button>
      </Link>
    
      <button
        onClick={()=>handledelete(post.id)}
        >Delete</button>
      
        </div>
       
      }
      {
        !posts &&
         <>
         <h2>NO posts To Display</h2>
         <p>visit the homePage</p>
         <p>
          <Link to ="/">go to Home</Link>
         </p>
         </>
      }

      
      
      </article>
    </main>
  )
}

export default Postpage