import React from 'react'

import { Link } from 'react-router-dom'

function Navbar() {
   


  return (
    <div className='flex gap-4 p-5 bg-gray-500 text-black justify-end font-bold'>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Project">Project</Link>


    </div>
  )
}

export default Navbar;