import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { getLogFailure, getLogRequest, getLogSuccess } from '../Redux/AuthReducer/actions';
import { useDispatch } from 'react-redux';
import { saveData } from '../utils/localStorage';

const Login = () => {
//    const [email,setEmail] = useState("");
//    const [password,setPassword] = useState("")

const [form,setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
})

const handleOnChange = (e)=> {
    const {name,value} = e.target

    setForm({
        ...form,
        [name]: value
    })
}
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const handleOnSubmit = (e)=> {
        e.preventDefault()
        if(form.email && form.password){
           const payload = {
            email : form.email,
            password : form.password
           }

             dispatch(getLogRequest())
             axios.post("https://reqres.in/api/login",payload)
             .then((r)=>{ dispatch(getLogSuccess(r.data))
                alert("Succeed")
             navigate("/")
            })
             .catch(()=> {dispatch(getLogFailure()) 
                alert("Please Enter Valid Details")
            })
            
        }
        else {
        alert("Please Enter Valid Details")
        }
    }
  return (
    <div>Login
   

     <form onSubmit={handleOnSubmit}>
        <input type="email"
        placeholder='Enter Your Email'
        name="email"
        value={form.email}
         onChange={handleOnChange}
        /> <br /> <br />
        <input type="password"
        placeholder='Enter Your Password'
        name="password"
        value={form.password}
        onChange={handleOnChange}
        /> <br /> <br />
        <button>Login</button>
     </form>


    </div>
  )
}

export default Login