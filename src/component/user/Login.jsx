import axios from "axios";
import React, { useEffect, useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import {eye} from 'react-icons-kit/fa/eye'
import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'
import Icon from "react-icons-kit";
import "../css/login.css";
import { showToastLoginMessage,showToastEmailError,showToastPasswordError, showToastLoginError } from "../Toast";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();
  const [type,setType]=useState("password")
  const [icon,setIcon]=useState(eyeSlash)

  const handleToggle=()=>{
    if(type==="password"){
      setIcon(eye);
      setType("text")
    }
    else{
      setIcon(eyeSlash);
      setType("password");
    }
  }

  useEffect(() => {
    sessionStorage.clear();
  }, []);


  const loginverify = (e) => {
    if (
      (validate) => {
        let result = true;
        if (email === "" || email === null) {
          result = false;
          alert("Enter Username");
        }
        if (password === "" || password === null) {
          result = false;
          alert("Enter Password");
        }
        return result;
      }
    ) {
      e.preventDefault();
      axios
        .get("http://localhost:8000/user?email=" + email)
        .then((res) => {
          return res.data;
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            showToastEmailError()
          } else {
            if (resp[0].password === password) {
              showToastLoginMessage()
              sessionStorage.setItem("email", email);
              navigate("/Listing");
            } else {
              showToastPasswordError()
            }
          }
        })
        .catch((err) => {
          showToastLoginError(err)
        });
    }
  };

  return (
    <div className="Login">
      <h1 className="Login-Heading">Login</h1>
      <form className="Login-form" onSubmit={loginverify}>
        <label id="Login-username-label">Email:</label>
        <input
          className="Login-input"
          id="Login-username-input"
          value={email}
          onChange={(email) => setEmail(email.target.value)}
          type="text"
          placeholder="E-mail"
          required
        />
        <label id="Login-password-label">Password:</label>
        <input
          className="Login-input"
          id="Login-password-input"
          value={password}
          required
          onChange={(password) => setPassword(password.target.value)}
          type={type}
          placeholder="Password"
        />
        <span onClick={handleToggle}><Icon icon={icon} /></span>
        <input id="login-submit-button" type={"submit"} value="Submit" />
      </form>
      <div className="New-user">
        New User ? <NavLink to={"/Signup"}>Register</NavLink>
      </div>
    </div>
  );
};

export default Login;