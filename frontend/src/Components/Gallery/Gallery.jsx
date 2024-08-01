import React from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'
import all_products from '../Assets/all_products'

const Gallery = (props) => {
  return (
    <div className='gallery'>
        <h2>{props.category}</h2>
        {/* <hr/> */}
        <div className="gallery-productimage">
          {all_products.map((item,i)=>{
              if (item.category.includes(props.category)){
                return <div className="productimage">
                  {/* <Link to={`/product/${item.id}`}>
                      <img src={item.image} alt="" />
                  </Link> */}
                  <img src={item.image} alt="" />
                </div>
              }
          })}
        </div>
    </div>
  )
}

export default Gallery