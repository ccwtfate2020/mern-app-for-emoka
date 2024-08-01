import React, { createContext, useEffect, useState } from 'react'
import all_products from '../Components/Assets/all_products'
import product_type from '../Components/Assets/product_type'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {}
    // console.log(all_products.length)
    for (let index = 0; index < all_products.length; index++) {
        cart[index+1] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart())

    
    const addToCart = (itemId,itemQuantity) => {
        // const quantityAdd = cartItems[itemId] >= all_products[itemId-1].quantity || cartItems[itemId] > 2 ? 0 : itemQuantity
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+itemQuantity}))
        console.log(cartItems)
        // console.log(cartItems[itemId])
        // console.log(all_products[itemId-1].quantity)
    }
    const addOneToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeOneFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log(cartItems)
    }
    const removeAllFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:0}))
        console.log(cartItems)
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_products,product_type,cartItems,addToCart,addOneToCart,removeOneFromCart,removeAllFromCart,getTotalCartAmount,getTotalCartItems}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;