import React, { useEffect, useState } from 'react'
import Header from './Header,Footer/Header'
import Footer from './Header,Footer/Footer'
import Nav from './Nav'
import Home from './Components/Home'
import NewPost from './Components/NewPost'
import Postpage from './Components/Postpage'
import About from './Components/About'
import Missing from './Components/Missing'
import { format } from 'date-fns'
import apirequest from './apirequest'

const App = () => {
  let [posts,setPosts] =useState([
   
  ]|| [])
  let [search,setSearch] = useState("")
  let[searchResult ,setSearchResults] = useState([])
  let[postTitle, setPostTitle] = useState("")
  let[postBody,setPostBody] = useState("")
  let[error,setError] = useState("")
  let[isloading,setIsloading] = useState(false)
  const API_URL = "http://localhost:3600/posts"
  
  useEffect(()=>{
    const filtersearchres = posts.filter((post)=>(
      (post.body).toLowerCase().includes(search.toLowerCase())) ||
      (post.title.toLowerCase().includes(search.toLowerCase())) 
    )
    setSearchResults(filtersearchres.reverse()) //note:reverse() to show latest post on starting
    console.log(filtersearchres)
      
  },[search,posts])
  
  
  
  useEffect(()=>{
   async function fetchdata(){
        try
        {
          setIsloading(true)
         const response = await fetch(API_URL)  
         if(!response.ok){
          throw Error("API CALL FAILED")
         }
         const data = await response.json()
         setPosts(data);
         setError("")
        }
        catch(err){
          setError(err.message)
        }finally{
            setIsloading(false)
        }
      }
      setTimeout(() => {
       (async ()=> await fetchdata())()
      },2000);
  },[])
  async function handlesubmit(e) {
    e.preventDefault();
    const newId = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const datetime = format(new Date(), "dd MMMM yyyy,pp");
    const newPost = { id: newId, title: postTitle, datetime, body: postBody };
    const updateOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };

    try {
      const response = await apirequest(API_URL, updateOptions);
      if (response) {
        setError(response);
      }
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setPostTitle("");
      setPostBody("");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className='App'>     
     <Header title = {"Venky Media App"}/>
     <Nav
     search={search}
     setSearch={setSearch}
     />
     <Home
    //  posts={posts.filter((post)=>(
    //   (post.body).toLowerCase().includes(search.toLowerCase())) ||
    //   (post.title.toLowerCase().includes(search.toLowerCase())) 
    // )}
    posts={searchResult}
     postBody={postBody}
     postTitle={postTitle}
     setPostBody={setPostBody}
     setPostTitle={setPostTitle}
     handlesubmit={handlesubmit}
     />
     <Postpage/>
     <About/>
     <Missing/>
     <Footer/>
    </div>
  )
}

export default App