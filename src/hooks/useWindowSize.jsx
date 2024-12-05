import { useEffect, useState } from "react"

const useWindowSize = () =>{
 let [windowSize, setWindowSize] = useState({
    width : undefined,
    height:undefined
 })

 useEffect(()=>{
    function handlesize (){
     setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
     })
    }
    handlesize()
    window.addEventListener("resize",handlesize)
     return () => window.removeEventListener("resize",handlesize) //memory leak
    
 },[])
 return windowSize 
}
export default useWindowSize;