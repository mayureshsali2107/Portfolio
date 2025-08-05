import React from 'react'
import { useNavigate } from 'react-router-dom';
import customercare from '../../customercare'

import { FaWhatsapp, FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'


function Footer() {

  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/customercare'); 
  };

 

  return (
    <div className='mt-35 md:mt-28 bg-gray-500 text-white pt-2 pb-1 flex justify-center gap-5 '>    
      
       <button  onClick={handleImageClick} className='w-8  hover:text-black' ><img src="../image-removebg-preview.png" alt="" /></button>
       <a
          href="https://wa.me/919766065174" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 text-3xl"
        >
          <FaWhatsapp />
        </a>

       
        <a
          href="https://facebook.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-3xl"
        >
          <FaFacebookF />
        </a>

        
        <a
          href="https://instagram.com/mayuresh__68" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-3xl"
        >
          <FaInstagram />
        </a>

         <a
          href="https://github.com/mayureshsali2107" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-black text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-3xl"
        >
          <FaLinkedin />
        </a>
     
     
      </div>
    

  )
}

export default Footer