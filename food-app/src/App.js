import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart'
import Placeorder from './Components/Placeorder'
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
 const[showLogin, setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Order' element={<Placeorder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}
export default App