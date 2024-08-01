import React, {useContext} from 'react'
import PosterSlider from '../Components/PosterSlider/PosterSlider'
import { ShopContext } from '../Context/ShopContext'
import Gallery from '../Components/Gallery/Gallery'

const Home = () => {
  const {product_type} = useContext(ShopContext)
  return (
    <div>
      <PosterSlider/>
      {product_type.map((item,i)=>{
          return <Gallery category={item.name}/>
      })}
    </div>
  )
}

export default Home