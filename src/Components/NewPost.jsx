import React from 'react'

const NewPost = ({handlesubmit,postTitle,postBody,setPostTitle,setPostBody}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form  className='newPostForm' onSubmit={handlesubmit}>
       <label htmlFor='postTitle'>Title</label>
      <input
      type='text'
      required
      placeholder='enter the title'
      id='postTitle'
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
      />
      <label htmlFor='postBody'>Post</label>
      <textarea
      required
      placeholder='enter the post'
      id='postBody'
      value={postBody}
      onChange={(e)=>setPostBody(e.target.value)}
      />
      <button type='submit'>Submit</button>
      </form>

    </main>
  )
}

export default NewPost