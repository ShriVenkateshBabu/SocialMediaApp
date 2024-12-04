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
// import apirequest from './apirequest'
import api from "./api/posts"
import { Route, Routes, useNavigate } from 'react-router-dom'

const App = () => {
  let [posts,setPosts] =useState([
  ]|| [])
  let [search,setSearch] = useState("")
  let[searchResult ,setSearchResults] = useState([])
  let[postTitle, setPostTitle] = useState("")
  let[postBody,setPostBody] = useState("")
  let[error,setError] = useState("")
  let[isloading,setIsloading] = useState(false)
  // const API_URL = "http://localhost:3600/posts"
  const navigate = useNavigate()
  
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
         const response = await api.get() 
         setPosts(response.data);
         setError("")
        }
        catch(err){
          if(response){
            console.log(err.response)
          }
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
    const newId = posts.length ? (posts[posts.length - 1].id) + 1 : 1;
    const datetime = format(new Date(), "dd MMMM yyyy,pp");
    const newPost = { id: newId, title: postTitle, datetime, body: postBody };
    // const updateOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newPost),
    // };

    // try {
    //   const response = await apirequest(API_URL, updateOptions);
    //   if (response) {
    //     setError(response);
    //   }
      // } catch (err) {
    //   setError(err.message);
    // }
     try{
      const resposne = await api.post('',newPost)
      const allpost = [...posts,newPost] // newpost or response.data
      setPosts(allpost);
      setPostTitle("");
      setPostBody("");
      navigate("/")
     }
     catch(err){
      if(response){
        console.log(response.Header)
      }
      setError(err.message)
    }
  }
  const handledelete = async (id)=>{
    try{
     await api.delete(`${id}`)
     const post_list = posts.filter((post)=>(post.id!==id))
     console.log(id)
     setPosts(post_list)
     navigate("/")
     }
     catch(err){
      if(response){
        console.log(response.Header)
      }
      setError(err.message)
    }
     // const deleteoption = {
      //   method :"DELETE",
      // }
      // try{
      //   const response = await apirequest(`${API_URL}/${id}`,deleteoption)
      //   if(!response.ok){
      //     throw Error("DELETE METHOD PROBLEM")
      //   }
      // }
      // catch(err){
      //    setError(err.message)
      // }
  }
  return (
    <div className='App'>     
     <Header title = {"Venky Media App"}/>
     <Nav
     search={search}
     setSearch={setSearch}
     />
     {isloading && console.log("loading")}
     <Routes>
     <Route path='/' element={<Home
    //  posts={posts.filter((post)=>(
    //   (post.body).toLowerCase().includes(search.toLowerCase())) ||
    //   (post.title.toLowerCase().includes(search.toLowerCase())) 
    // )}
    posts={searchResult}/>}/>
     
    <Route path ="posts">   
    <Route  index element ={<NewPost
     postBody={postBody}
     postTitle={postTitle}
     setPostBody={setPostBody}
     setPostTitle={setPostTitle}
     handlesubmit={handlesubmit}
     />}/>
    <Route path=":id" element={<Postpage
    posts ={posts}
    handledelete ={handledelete}
    />}/>
     </Route>     
     <Route path ="about" element ={<About/>}/>
     <Route path="*" element={<Missing/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App