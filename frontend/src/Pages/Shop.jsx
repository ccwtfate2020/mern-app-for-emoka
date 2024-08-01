import React, {useContext, useState} from 'react'
// import { Link } from 'react-router-dom'
// import product from '../Components/Assets/product'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import './CSS/Shop.css'
// import product_type from '../Components/Assets/product_type'

const Shop = () => {
  const {all_products,product_type} = useContext(ShopContext)
  const [category, setCategory] = useState("all");

  return (
    <div className='shop'>
      <ul className="shop-list">
        <li onClick={()=>{setCategory('all')}} style={{color: category === "all" ? 'black' : 'inherit' }}>All</li>
        {product_type.map((item,i)=>{
          return <li onClick={()=>{setCategory(item.name)}} style={{color: category === item.name ? 'black' : 'inherit' }}>{item.name}</li>
        })}
      </ul>
      <div className="shop-products">
        {all_products.map((item, i)=>{
          if (item.category.includes(category) || category==='all') {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} category={item.category} quantity={item.quantity}/>
          }
        })}
      </div>
    </div>
  )

}
export default Shop