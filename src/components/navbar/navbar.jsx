import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.png'
import './navbar.css'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky]= useState(false);


  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])
  
  const [mobileMenu, setMobileMenu]=useState(false)

  const toggleMenu=()=>{


  mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
      <img src={logo} className="logo"></img>
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className="btn">Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar

//offset of -150 means the page will be scrolled up by 15px from the target element
