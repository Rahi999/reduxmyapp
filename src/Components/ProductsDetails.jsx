import React, { useEffect, useState } from 'react'
import {useParams } from "react-router-dom"
import axios from "axios"
import { loadData, saveData } from '../utils/localStorage'
const ProductsDetails = () => {
    const [data,setdata] = useState([])
    const params = useParams()
  
   const get = () => {
    axios.get(`http://localhost:8080/products/${params.id}`)
    .then((res)=> setdata(res.data))
    .catch((err)=> alert(err))
   }

   useEffect(()=> {
     get()
   },[])

    const addToCart = () => {
        let cart = loadData("cart")||[];
        cart.push(data)
        saveData("cart",cart)
        alert("Added")
        window. location. reload(false)
        
    }
   
  return ( <>
    <div>ProductsDetails
  
     

    </div>
    <img src={data.image} alt="" width="100px"/>
    <h1>{data.price}</h1>
     <button onClick={addToCart}>Add To Cart</button>
    </>
  )
}

export default ProductsDetails