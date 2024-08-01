import React from 'react'
import { Link } from 'react-router-dom'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow_2.png'

const Breadcrums = (props) => {
    // const {product} = props;
  return (
    <div className='breadcrum'>
        <Link to='/shop' style={{textDecoration: 'none', color: '#5e5e5e'}} className='breadcrum-link'><img src={arrow_icon} alt="" /> BACK </Link>
    </div>
  )
}

export default Breadcrums