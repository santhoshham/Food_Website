import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../Context/StoreContext'

export default function Placeorder(){

    const{getTotalCartAmmount}=useContext(StoreContext)
    return(
    <form className='place-order'>
        <div className='place-order-left'>
<p className='title'>Delivery Information</p>
<div className='multiple-fields'>
    <input type='text' placeholder='Your First name'/>
    <input type='text' placeholder='Your Last name'/>
</div>
<input type='email' placeholder='Email address'/>
    <input type='text' placeholder='Street'/>
    <div className='multiple-fields'>
    <input type='text' placeholder='City'/>
    <input type='text' placeholder='State'/>
</div>
<div className='multiple-fields'>
    <input type='text' placeholder='ZipCode'/>
    <input type='text' placeholder='Country'/>
</div>
<input type='text' placeholder='Phone'/>

        </div>
        <div className='place-order-right'>
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
                    <button>Proceed To Payment</button>
                </div>
        </div>

    </form>
    )
}