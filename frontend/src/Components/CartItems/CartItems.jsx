import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const CartItems = () => {
    const [phone, setPhone] = useState()
    const [dealMethod, setDealMethod] = useState('pickup')
    const {all_products,cartItems,addOneToCart,removeOneFromCart,removeAllFromCart,getTotalCartAmount,getTotalCartItems} = useContext(ShopContext)

    const changeHandler = (e) => {
        setDealMethod(e.target.value)
    }

  return (
    <div className='cartitems'>
        <h2>Shopping Cart</h2>
        <hr /> 
        {all_products.map((product)=>{
            if(cartItems[product.id]>0){
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={product.image} alt="" className='carticon-product-icon' />
                                <div className="cartitems-productdetail">
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                    <div className="cartitems-quantity">
                                        <button onClick={()=>{removeOneFromCart(product.id)}} class="cartitems-quantity-plusminus">{"-"}</button>
                                        <p class="cartitems-quantity-number">{cartItems[product.id]}</p>
                                        <button onClick={()=>{addOneToCart(product.id)}} class="cartitems-quantity-plusminus" aria-label="Increase">{"+"}</button>
                                    </div>
                                    <p className="cartitems-productdetail-totalprice">${product.price*cartItems[product.id]}</p>
                                    {/* <p>${product.price*cartItems[product.id]}</p> */}
                                    {/* <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeAllFromCart(product.id)}} alt="" /> */}
                                    {/* <button className='cartitems-delete' onClick={()=>{removeAllFromCart(product.id)}}>DELETE</button> */}
                                </div>
                                <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeAllFromCart(product.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-total">
            <div className="cartitems-total-item">
                <p>{"Subtotal ("+getTotalCartItems()+" items): "} <span>${getTotalCartAmount()}</span></p>
            </div>
            <div className="cartitems-buyerinfo">
                <h3>Your information</h3>
                <input type="text" placeholder='Your Name' maxlength='80' required/>
                <input type="email" placeholder='Your Email' maxlength='320' required/>
                <PhoneInput placeholder="Your phone number" value={phone} onChange={setPhone} required/>
                <div className="cartitems-buyerinfo-dealmethods">
                    <select name="dealmethod" onChange={changeHandler} required>
                        {/* <option value="">-- Please choose Pickup / Delivery --</option> */}
                        <option value="pickup">Pickup</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    {dealMethod==="pickup"?
                    <div className='cartitems-buyerinfo-dealmethods-pickup'>
                        <select name="pickup-location" required>
                            <option value="">-- Please choose a pickup location --</option>
                            <option value="ACGHK">Animation-Comic-Game Hong Kong</option>
                            <option value="CWT">Comic World Taiwan (Taipei)</option>
                        </select>
                        <input type="date" required/>
                    </div>
                    :
                    <div className='cartitems-buyerinfo-dealmethods-delivery'>
                        <textarea rows="8" placeholder='Your Address'></textarea>
                    </div>
                    }
                </div>

            </div>
            <Link to="/"><button disabled={getTotalCartItems()>0?false:true}>CONTINUE</button></Link>
        </div>
    </div>
  )
}

export default CartItems