import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../Context/StoreContext';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export default function Cart() {

    const { CarItems, food_list, removeFromCart,getTotalCartAmmount } = useContext(StoreContext);

         const navigate = useNavigate()
    // Function to check if the cart is empty
    const isCartEmpty = () => {
        return Object.values(CarItems).every((quantity) => quantity === 0);
    };

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-titles'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {isCartEmpty() ? (
                    <h4>No Foods Added Into Cart</h4>
                ) : (
                    food_list.map((item, index) => {
                        if (CarItems[item._id] > 0) {
                            return (
                                <>
                                    <div key={item._id} className='cart-items-title cart-items-item'>
                                        <img src={item.image} alt='' />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{CarItems[item._id]}</p>
                                        <p>${item.price * CarItems[item._id]}</p>
                                        <p onClick={() => removeFromCart(item._id)}>
                                            <RxCross1 size={25} />
                                        </p>
                                    </div>
                                    <hr />
                                </>
                            );
                        }
                    })
                )}
            </div>
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmmount()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>${getTotalCartAmmount()===0?0:getTotalCartAmmount()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/Order')}>Proceed To Checkout</button>
                </div>
                <div className='cart-promocode'>
                    <div>
                        <p>Tf you have a promo code,Enter it here</p>
                        <div className='cart-promocode-inputs'>
                            <input type='text' placeholder='promocode'></input>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
