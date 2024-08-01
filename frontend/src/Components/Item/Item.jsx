import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = (props) => {
  return (
    <div className='item'>
        {/* <div className="item-productimg"> */}
          <Link to={`/product/${props.id}`} className="item-productimg">
            <p className="item-soldout">{props.quantity <= 0 ? "SOLD OUT" : ""}</p>
            <img onClick={()=>window.scrollTo(0,0)} src={props.image} alt="" />
          </Link>
        {/* </div> */}
        <p>{props.name}</p>
        <div className="item-price">
            ${props.price}
        </div>
    </div>
  )
}

export default Item