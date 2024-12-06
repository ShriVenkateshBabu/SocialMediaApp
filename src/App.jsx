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
import { Route, Routes, useNavigate } from 'react-router-dom'
import Editpost from './Components/Editpost'
import { DataProvider } from './DataContext/DataContext'

const App = () => {
   
  return (
    <div className='App'>     
     <DataProvider>
     <Header title = {"Venky Media App"}
     />
     <Nav
     />
     <Routes>
     <Route path='/' element={<Home/>}/>
    <Route path ="posts">   
    <Route  index element ={<NewPost />}/>
    <Route path=":id" element={<Postpage/>}/>
     </Route>  
     <Route path='edit/:id' element ={<Editpost/>}/>   
     <Route path ="about" element ={<About/>}/>
     <Route path="*" element={<Missing/>}/>
     </Routes>
     <Footer/>
     </DataProvider>
    </div>
  )
}

export default App