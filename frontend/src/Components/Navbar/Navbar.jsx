import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>E-FARMA</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("eurofarma")}}><Link style={{textDecoration: 'none'}} to='/eurofarma'>Eurofarma</Link>{menu==="eurofarma"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("medley")}}><Link style={{textDecoration: 'none'}} to='/medley'>Medley</Link>{menu==="medley"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("neoquimica")}}><Link style={{textDecoration: 'none'}} to='/neoquimica'>Neo Química</Link>{menu==="neoquimica"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar