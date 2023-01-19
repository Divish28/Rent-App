import axios from 'axios'
import { Toast } from 'bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import { json, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from './auth'
// import { toast } from 'react-toastify'
import './css/login.css'
// import Home from './Home'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const loginverify = (e) => {
    if ((validate) => {
      let result = true;
      if (email === '' || email === null) {
        result = false;
        alert("Enter Username");
      }
      if (password === '' || password === null) {
        result = false;
        alert("Enter Password");
      }
      return result;
    }) {
      e.preventDefault()
      // console.log("process ")
      axios.get("http://localhost:8000/user?email=" + email).then((res) => {
        return res.data;
      }).then((resp) => {
        if (Object.keys(resp).length === 0) {
          // toast.error("Enter Correct Email")
          alert("Enter Correct Email")
        }
        else {
          if (resp[0].password === password) {
            alert("Login Success")
            // toast.success("Login Sucess")
            sessionStorage.setItem('email', email);
            navigate("/Home")
          }
          else {
            // toast.error("Enter correct password")
            alert("Enter Correct Password");
          }
        }
      }).catch((err) => {
        // toast.error("login failed")
        alert("Login Failed:" + err.message);
      });
    }
  }

  return (
    <div>
      <h1 className='Login-Heading'>Login</h1>
      <form className='Login-form' onSubmit={loginverify}>
        <label id='Login-username-label' >Email:</label>
        <input id='Login-username-input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='E-mail' required />
        <label id='Login-password-label'>Password:</label>
        <input id='Login-password-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required ></input>
        {/* <button id="Login-submit">Submit</button> */}
        <input id='login-submit-button' type={"submit"} value="Submit" />
      </form>
      <div className="New-user">
        <NavLink to={"/Signup"}>New User?</NavLink>
      </div>
    </div>

  )
}

export default Login