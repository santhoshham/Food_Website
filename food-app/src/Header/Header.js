import React from 'react'
import './Header.css'
import headerImg from '../Assets/header_img.png';


export default function Header(){
    return(
    <div className='header'  style={{ backgroundImage: `url(${headerImg})`, backgroundRepeat: 'no-repeat', }}>
     <div className='Header-contents'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients.</p>
        <button>View Menu</button>
     </div>
    </div>
    )
}