import React from 'react';
import './Footer.css';
import images from '../../Assets/Images';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={images.logo} alt='Logo' />
                    <p>Delicious meals, anytime, anywhere!</p>
                    <div className="footer-social-icons">
                        <CiFacebook className="social-icon" title="Facebook" size={30}/>
                        <FaInstagram className="social-icon" title="Instagram" size={30}/>
                        <CiLinkedin className="social-icon" title="LinkedIn" size={30}/>
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                       <Link to='/'> <li>Home</li></Link>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2> GET IN TOUCH</h2>
                    <ul>
                        <li>+11-657-764-7468</li>
                        <li>
                            <a href='mailto:sandysanthoshgo007@gmail.com'>sandysanthoshgo007@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
           <hr/>
    <p className='footer-copyright'>© 2024 FlavorVerse. The recipes are yours to eat, not to repeat! 🍕🔥</p>
        </div>
        
    );
}

export default Footer;
