import React, { useContext } from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import DataContext from '../DataContext/DataContext'
const Header = ({title}) => {
   const {width} = useContext(DataContext)
  return (
    <header className='Header'>
     <h1>{title}</h1> 
     {width <768 ? <FaMobileAlt/> :
     width < 992 ? <FaTabletAlt/>:
     <FaLaptop/>
     }
    </header>
  )
}

// Header.defaultProps = {
//   title: "Media"
// }

export default Header
