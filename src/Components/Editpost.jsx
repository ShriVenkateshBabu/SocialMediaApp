import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../DataContext/DataContext'
const Editpost = () => {
    const {posts,setEditBody,seteditTitle,editTitle,editBody ,handle_edit}= useContext(DataContext)
    const {id} = useParams()
    const post = posts.find((post)=>post.id===id)
    // console.log(post)
    useEffect(()=>{
        if(post){
            seteditTitle(post.title)
            setEditBody(post.body)
        }
    },[])
    return (
        <main className='NewPost'>
        <h2>Edit Post</h2>
      <form  className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
       {editTitle &&
       <>
       <label htmlFor='postTitle'>Title</label>
       <input
       type='text'
       required
       autoFocus
       placeholder='enter the title'
       id='postTitle'
       value={editTitle}
       onChange={(e)=>seteditTitle(e.target.value)}
       />
       </>
       } 
       {editTitle && 
       <>
       <label htmlFor='postBody'>Post</label>
        <textarea
        required
        placeholder='enter the post'
        id='postBody'
        value={editBody}
        onChange={(e)=>setEditBody(e.target.value)}
        />
        <button  onClick ={()=>handle_edit(post.id)}  type='submit'>Submit</button>
       </>
       }
       </form>
      </main>
  )
}

export default Editpost