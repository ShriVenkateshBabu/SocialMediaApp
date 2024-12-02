import React from 'react'

const Header = ({title}) => {
  return (
    <header className='Header'>
     <h1>{title}</h1> 
    </header>
  )
}

// Header.defaultProps = {
//   title: "Media"
// }

export default Header
