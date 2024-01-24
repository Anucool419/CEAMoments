import React from 'react'
import Sogo from "../assets/image.jpg"


function footer() {
  return (
    <div className='socialmedia'>
      <p>&copy; 2024 Moments.com</p>
    <p2>About</p2><br></br>
    <a href="https://www.nitt.edu/">National Institute of Technology</a><br></br>
    <a href="https://www.nitt.edu/home/academics/departments/civil/events/symposium/">Moments</a><br></br>
    <a href="https://www.instagram.com/moments.nitt/">Instagram </a>
    <div className='image1'>
    <img src={Sogo} width={250} height={250}/></div>

      
    </div>
  )
}

export default footer
