import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Orders from './Pages/Orders';
import Navber from './Components/Navber';
import Footer from './Components/Footer';
import SearchBer from './Components/SearchBer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className=' px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vh] '>
      <ToastContainer />
      <Navber />
      <SearchBer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/:productId' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/place-order' element={<PlaceOrder />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;