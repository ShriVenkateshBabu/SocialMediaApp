import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from "./DataContext/DataContext"
const Nav = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <nav className='Nav'>
      <form className ="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'><b>Search Posts</b></label>
        <input type='text'
        placeholder='Search Post'
        id='search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/posts">Posts</Link></li>
        <li><Link to ="/About">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav