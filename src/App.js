import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AllRoutes from './Components/AllRoutes';

function App() {

  const products = useSelector(state=> state.AppReducer.products)
  const {auth, token} = useSelector(state => {
    return {
      auth : state.AuthReducer.isAuth,
      token: state.AuthReducer.token
    }
  })

  console.log("isAuth : ",auth)
  console.log('Token :  ',token)

  return ( 
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
