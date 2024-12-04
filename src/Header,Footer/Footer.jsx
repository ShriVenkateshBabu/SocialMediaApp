import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <footer>
     SHRI &copy; {date.getFullYear()}
    </footer>
  )
}

export default Footer