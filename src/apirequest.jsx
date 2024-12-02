async function apirequest(url="",objoption=null,Errmsg=null){
  try{
    const response = fetch(url,objoption)
    if(!response.ok){
        throw Error("please reload the app")
    }
  }
  catch(err){
       Errmsg = err.message
  }
  finally{
     return Errmsg
  }
}
 
export default apirequest;