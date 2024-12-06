import { createContext,useEffect,useState } from "react";
import  useAxiosFetch from "../hooks/useAxiosFetch"
import  useWindowSize from "../hooks/useWindowSize"
import { format } from 'date-fns'
import api from "../api/posts"
import { useNavigate } from "react-router-dom";
const DataContext = createContext({})

export const DataProvider = ({children}) =>{
  let {width} = useWindowSize()
  let [posts,setPosts] =useState([]|| [])
  let[editTitle,seteditTitle] = useState('')
  let[editBody,setEditBody] =useState("")
  let [search,setSearch] = useState("")
  let[searchResult ,setSearchResults] = useState([])
  let[postTitle, setPostTitle] = useState("")
  let[postBody,setPostBody] = useState("")
  // const API_URL = "http://localhost:3600/posts"
  const navigate = useNavigate()
  const { data, error, isLoading } = useAxiosFetch("http://localhost:3600/posts");
  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  useEffect(()=>{
    const filtersearchres = posts.filter((post)=>(
      (post.body).toLowerCase().includes(search.toLowerCase())) ||
      (post.title.toLowerCase().includes(search.toLowerCase())) 
    )
    setSearchResults(filtersearchres.reverse()) //note:reverse() to show latest post on startin
  },[search,posts])  
  // useEffect(()=>{
  //  async function fetchdata(){
  //       try
  //       {
  //        setIsloading(true)
  //        const response = await api.get() 
  //        setPosts(response.data);
  //        setError("")
  //       }
  //       catch(err){
  //         if(response){
  //           console.log(err.response)
  //         }
  //         setError(err.message)
  //       }finally{
  //           setIsloading(false)
  //       }
  //     }
  //     setTimeout(() => {
  //      (async ()=> await fetchdata())()
  //     },2000);
  // },[])
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
      const response = await api.post('',newPost)
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
  async function handle_edit  (id){
    const datetime = format(new Date(), "dd MMMM yyyy,pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try{
    let response = await api.put(id,updatedPost)
    setPosts(posts.map((post)=>post.id===id ? {...response.data}:post))
    seteditTitle("")
    setEditBody("")
    navigate('/')
    }
    catch(err){
     setError(err.message)
    }
  }
   return(
    <DataContext.Provider value={
        {
            width,search,setSearch,searchResult,error,isLoading,
            handlesubmit,postTitle,postBody,setPostTitle,
            editTitle,editBody,
            setPostBody,posts,handledelete,navigate,setSearchResults,seteditTitle,setEditBody,
            handle_edit
        }
     }>
       {children}
     </DataContext.Provider>
   )
}
export default DataContext;