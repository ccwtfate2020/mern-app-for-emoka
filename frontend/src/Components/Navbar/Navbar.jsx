import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();
    const tribarRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }
    const reset_dropdown_toggle = () => {
        if (menuRef.current) {
            tribarRef.current.classList.remove('open')
            menuRef.current.classList.remove('nav-menu-visible');
        }
    }

  return (
    <div className='navbar'>
        <div className="nav-tribar-menu">
            <h1 onClick={dropdown_toggle} className='nav-tribar' ref={tribarRef}>≡</h1>
            <ul ref={menuRef} className="nav-menu">
                <Link style={{textDecoration: 'none', color: menu === "home" ? 'black' : 'inherit' }} to='/'><li onClick={()=>{setMenu("home");window.scrollTo(0,0);reset_dropdown_toggle()}} >Home</li></Link>
                <Link style={{textDecoration: 'none', color: menu === "shop" ? 'black' : 'inherit'}} to='/shop'><li onClick={()=>{setMenu("shop");window.scrollTo(0,0);reset_dropdown_toggle()}}>Shop</li></Link>
                <Link style={{textDecoration: 'none', color: menu === "contact" ? 'black' : 'inherit'}} to='/contact'><li onClick={()=>{setMenu("contact");window.scrollTo(0,0);reset_dropdown_toggle()}}>Contact</li></Link>
                {/* <Link style={{textDecoration: 'none', color: menu === "contact" ? 'black' : 'inherit'}} to='/contact'><li onClick={()=>{setMenu("contact");window.scrollTo(0,0);reset_dropdown_toggle()}}>Contact</li></Link> */}
            </ul>
        </div>
        <div onClick={()=>{setMenu("home");window.scrollTo(0,0)}} className="nav-logo">
            <Link style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px'}} to='/'>
                <img src={logo} alt="" />
                <p>EMOKA</p>
            </Link>
        </div>
        <div className="nav-cart">
            <Link to='/cart'><img onClick={()=>{setMenu("cart");window.scrollTo(0,0)}} src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>

  )
}

export default Navbar