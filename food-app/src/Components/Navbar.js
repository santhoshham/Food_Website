import React, { useContext, useState } from 'react'
import './Navbar.css'
import images from '../Assets/Images';
import '@flaticon/flaticon-uicons/css/all/all.css';
import {Link} from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext';



export default function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("Home"); 

  const{getTotalCartAmmount}=useContext(StoreContext)
  return (
    <div className='Logo'>
    <Link to='/'>  <img src={images.logo} alt='Screen' className='Logo' /></Link>
      <ul className='navbar-menu'>
        <Link  to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a  href='#explore-menu'onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-APP</li>
        <a  href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact-Us </a>
      </ul>
      <div className='navbar-right'>
        <i className="fi fi-rr-search" style={{ fontSize: '23px' }} />
        <div className='navbar-search-icon'>
         <Link to='/cart'><i className="fi fi-rr-shopping-bag" style={{ fontSize: '22px' }} /></Link>
          <div className={getTotalCartAmmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

