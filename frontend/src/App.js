// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
