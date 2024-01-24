import React from 'react'
import BGI from "../assets/bgi.jpg" ;
import Sogo from "../assets/image.jpg"
import {Link} from "react-router-dom"
import {CSSTransition} from 'react-transition-group';

import '../styles/home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BGI})`}}>
        
      <div className='headerContainer'> 
      
      <h1>CAMPUS AMBASSADOR</h1>
      <h2>The National-level Technical Symposium Of Civil Engineering,NITT</h2>
      <p1>The Campus Ambassador program for Moments at NIT Trichy is an exciting opportunity for dynamic individuals to become the face of our National-level Technical Symposium in Civil Engineering. As a Campus Ambassador, you'll play a crucial role in spreading the word about Moments, fostering a sense of enthusiasm within your college community.<br></br>

Joining us as a Campus Ambassador means being a part of a vibrant team dedicated to promoting knowledge exchange, innovation, and technical prowess. Your role involves engaging with fellow students, organizing promotional events, and sharing the excitement surrounding Moments. As an ambassador, you'll be at the forefront of connecting your peers with the enriching experiences Moments has to offer, contributing to the success of our symposium.<br></br>

Embrace the chance to develop leadership skills, expand your network, and be a catalyst for the thriving technical culture at NIT Trichy. Join us in creating memorable Moments and inspiring the next generation of engineers!






</p1>

 <div className='image1'>
       
     <img src={Sogo} width={250} height={250}/>
      
     </div>
     </div>
    </div>
  )
}

export default Home
