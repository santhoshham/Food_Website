import React, { useState } from 'react'
import './Login.css'
import { FaSkullCrossbones } from "react-icons/fa6";
//import { RxCross1 } from "react-icons/rx";


function Login({ setShowLogin }) {

    const [current, setCurrent] = useState("Login")
    return (
        <div className='Login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{current}</h2>
                    <FaSkullCrossbones size={20} color='red' onClick={() => setShowLogin(false)} />
                </div>
                <div className='login-popup-inputs'>
                    {current === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                    
                </div>
                <button>{current === "Sign Up" ? "Create account" : "Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {current==="Login"
                ?<p>Create a new account?<span onClick={()=>setCurrent("Sign Up")}>Click Here</span> </p>
                :<p>Already have an account? <span onClick={()=>setCurrent("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}
export default Login
