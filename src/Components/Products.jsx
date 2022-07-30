import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import axios from "axios"
import { getProductsFailure, getProductsRequest, getProductsSuccess } from '../Redux/AppReducer/actionsType'
import { getPFailure, getPRequest, getPsuccess } from '../Redux/AppReducer/actions'

const Products = () => {

    const { products, isLoading, isError } = useSelector((state) => {
        return {
            products: state.AppReducer.products,
          isLoading: state.AppReducer.isLoading,
          isError: state.AppReducer.isError
        };
      });
    

    const dispatch = useDispatch()


    const getProducts = () => {
        dispatch(getPRequest())
        return axios.get("http://localhost:8080/products")
               .then((res) => {
                console.log(res.data)
                dispatch(getPsuccess(res.data))
               }).catch((err)=> dispatch(getPFailure()))
    }

    useEffect(()=> {
      getProducts()
    },[])
    console.log("products is : ", products)
  return isLoading ? (<div>...Laoding</div>) : isError ?
   (<div>...Something Went Wrong</div>) :
    (
    <div>Products
   {products.length >= 0 && products.map((data)=> (
    <Link key={data.id} to={`/products/${data.id}`}><div >{data.id}</div></Link>
   ))}

    </div>
  )
}

export default Products