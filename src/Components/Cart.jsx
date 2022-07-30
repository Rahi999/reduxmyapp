import React from 'react'
import axios from "axios"
import { loadData, saveData } from '../utils/localStorage'

const Cart = () => {
    const items = loadData("cart")
  let sum = 0
  if(items){
    items.map((plus)=> {
    return sum+= Number(plus.price)
  })
}

  if(items){
    var length = items.length
    saveData("length", length)
  }
  return ( <>
    <div>Cart</div>  {length ? <h2>You Have {length} Items and Total is ${sum} </h2> : null}
      {items ? items.map((d)=> (
        <div key={d.id}>
            <img src={d.image} alt="" width="100px" />
            <h1>{d.price}</h1>
            <h4>{d.title}</h4>
             <button >Remove From Cart</button>
        </div>
      ))  : <h1>No Items In Cart</h1>}
    
    
    </>
  )
}

export default Cart