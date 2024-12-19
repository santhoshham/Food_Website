import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { IoStar, IoStarHalf } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { StoreContext } from '../../Context/StoreContext';


function Fooditem({ id, name, price, description, image, rating }) {

  const[itemCount , setItemCount] =useState(0)
  const {  CarItems,addToCart,removeFromCart} = useContext(StoreContext)

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-img' src={image} alt='' />
       {/* {!itemCount
             ? <img className='add' onClick={()=> setItemCount(prev=>prev+1)} src={<CiCirclePlus />} alt=''/>
              :<div className='food-item-counter'>
                <img onClick={()=> setItemCount(prev=>prev-1)} src={<CiCircleMinus />} alt=''/>
                <p>{itemCount}</p>
                <img onClick={()=> setItemCount(prev=>prev+1)} src={<CiCirclePlus />} alt=''/>
                </div>
        }*/}
        {!CarItems[id] ? (
          <CiCirclePlus
            className="add-icon"
            onClick={() =>addToCart(id)} size={30}
          />
        ) : (
          <div className="food-item-counter">
            <CiCircleMinus
              className="counter-icon"
              onClick={() => removeFromCart(id)} color='red' size={30}
            />
            <p>{CarItems[id]}</p>
            <CiCirclePlus
              className="counter-icon"
              onClick={() => addToCart(id)} color='green' size={30}
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          {/* <IoStar  color='red'/>
                <IoStar  color='red'/>
                <IoStar  color='red'/>
                <IoStar  color='red'/>
               <IoStarHalf color='red'/>
               */}
          <div className='food-item-rating'>
            {[...Array(fullStars)].map((_, index) => (
              <IoStar key={`full-${index}`} color="red" />
            ))}
            {halfStar && <IoStarHalf key="half" color="red" />}
            {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
              <IoStar key={`empty-${index}`} color="gray" />
            ))}
          </div>
        </div>
        <p className='food-item-description'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default Fooditem