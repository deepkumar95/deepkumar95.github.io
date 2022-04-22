import React, {useState} from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

const Nav = () => {
  const [navActive, setNavActive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={()=>{setNavActive('#')}} className={navActive==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setNavActive('about')}}  className={navActive==='about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setNavActive('experience')}}  className={navActive==='experience'?'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>{setNavActive('services')}}  className={navActive==='services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setNavActive('contact')}}  className={navActive==='contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav