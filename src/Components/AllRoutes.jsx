import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import { loadData } from '../utils/localStorage'
import About from './About'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import ProductsDetails from './ProductsDetails'

const AllRoutes = () => {

    const items = loadData("cart")
    if(items){
        var length = items.length
      }
    
    console.log("length from LocalStorage is ", length)
    const isAuth = loadData("isAuth")
  return (
    <div>

     <Link to='/'>Home</Link>  {"   "} 
       <Link to='/products'>Products</Link> {" "}
     <Link to='/about'>About</Link> {" "}
     <Link to='/login'>Login</Link> {" "}
     <Link to='/cart'>Cart</Link> {length ? <span>{length}  </span> : 0} {" "}
    




        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={isAuth ? <About /> : <Login />} />
            <Route path='/cart' element={isAuth ? <Cart /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={isAuth ? <Products /> : <Login />} />
            <Route path='/products/:id' element={<ProductsDetails />} />
        </Routes>
    </div>
  )
}

export default AllRoutes