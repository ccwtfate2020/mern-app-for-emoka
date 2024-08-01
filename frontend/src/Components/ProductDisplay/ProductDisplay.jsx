import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    const [quantity, setQuantity] = useState(product.quantity>0 ? 1 : 0)

  return (
    <div className='productdisplay'>
        <img className='productdisplay-img' src={product.image} alt="" />
        <div className="productdisplay-detail">
            <h1>{product.name}</h1>
            <p className="productdisplay-price">${product.price}</p>
            <div className="productdisplay-cartitems-quantity">
              {/* <button onClick={()=>{quantity>1 ? setQuantity(quantity-1) : setQuantity(quantity)}} class="productdisplay-right-cartitems-quantity-plusminus">{"-"}</button> */}
              <button onClick={()=>{quantity>1 ? setQuantity(quantity-1) : setQuantity(quantity)}} class="productdisplay-cartitems-quantity-plusminus">{"-"}</button>
              <p class="productdisplay-cartitems-quantity-number">{quantity}</p>
              <button onClick={()=>{quantity<product.quantity ? setQuantity(quantity+1) : setQuantity(quantity)}} class="productdisplay-cartitems-quantity-plusminus" aria-label="Increase">{"+"}</button>
            </div>
            {/* <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> */}
            {product.quantity>0 ?
            <button className='productdisplay-addtocart' onClick={()=>{addToCart(product.id,quantity);setQuantity(1)}}>ADD TO CART</button> : 
            <button className='productdisplay-addtocart' disabled>SOLD OUT</button>}
            {/* <p className="productdisplay-right-category"><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p> */}
        </div>
    </div>
  )
}

export default ProductDisplay