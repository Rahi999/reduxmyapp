import React from 'react'
import { useSelector } from 'react-redux'
import { loadData } from '../utils/localStorage'

const Home = () => {
    const token = loadData("token")
    console.log(token)
  return (
    <div>Home

<div>Token : {token ? token.token : null}</div>
    </div>
    
  )
}

export default Home