import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { eye } from "react-icons-kit/fa/eye";
import { eyeSlash } from "react-icons-kit/fa/eyeSlash";
import Icon from "react-icons-kit";
import "../css/login.css";
import Toast from "../Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber,setMobileNumber]=useState("");
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeSlash);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeSlash);
      setType("password");
    }
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLoginSubmit = (loginEvent)=>{
    loginEvent.preventDefault()
    loginVerify()
  }

  const validate = () => {
    let result = true;
    if(email.length>0 && mobileNumber.length>0){
      result= false;
      Toast("Enter only one","error")
    }
   if(email===""&& mobileNumber===""){
      result = false;
      Toast("Enter any one","error")
    }
     if (email === " " || email === null) {
      result = false;
      Toast("Enter Username","error");
    }
    else if (password === " " || password === null) {
      result = false;
      Toast("Enter Password","error");
    }
    return result;
  };

  const loginVerify = () => {
    if (validate()) {
      if(email!="" && mobileNumber===""){
      axios
        .get("http://localhost:8000/user?email="+email)
        .then((res) => {
          return res.data   
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0)
          {
            console.log(Object.keys(resp))
            Toast("Enter Valid E-mail", "error");
          } 
          else {
            if (resp[0].password === password) { 
              Toast("Logged in", "success");
              sessionStorage.setItem("session data", email);
              navigate("/Listing");
            }else {
              Toast("Enter Correct Password", "error");
            }
          }
        })
        .catch((err) => {
          Toast("Login Failed: " + err.message, "error");
        });
    }
    else {
      axios
    .get("http://localhost:8000/user?mobileNumber="+mobileNumber)
    .then((res) => {
      return res.data   
    })
    .then((resp) => {
      if (Object.keys(resp).length === 0)
      {
        console.log(Object.keys(resp))
        Toast("Enter Valid Mobile Number", "error");
      } 
      else if(email === "" && mobileNumber != " ") {
        if (resp[0].password === password) { 
          Toast("Logged in", "success");
          sessionStorage.setItem("session data",mobileNumber);
          navigate("/Listing");
        }else {
          Toast("Enter Correct Password", "error");
        }
      }
      console.log(resp.data)
    })
    .catch((err) => {
      Toast("Login Failed: " + err.message, "error");
    });
  }
  } 
  };

  return (
    <div className="Login">
      <h1 className="Login-Heading">Login</h1>
      <form className="Login-form" onSubmit={handleLoginSubmit}>
        <label id="Login-username-label">Email:</label>
        <input
          className="Login-input"
          id="Login-username-input"
          value={email}
          onInput={(email) => setEmail(email.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <label id="Login-username-label">Mobile Number:</label>
        <input
          className="Login-input"
          id="Login-Mobile-input"
          value={mobileNumber}
          pattern="^[0-9]{10}$"
          onInput={(mobileNumber) => setMobileNumber(mobileNumber.target.value)}
          title="Enter Mobile Number"
          type="text"
          placeholder="Mobile Number"
        />
        <label id="Login-password-label">Password:</label>
        <input
          className="Login-input"
          id="Login-password-input"
          value={password}
          onInput={(password) => setPassword(password.target.value)}
          type={type}
          placeholder="Password"
        />
        <span onClick={handleToggle}>
          <Icon icon={icon} />
        </span>
        <input id="login-submit-button" type={"submit"} value="Submit" />
      </form>
      <div className="New-user">
        New User ? <NavLink to={"/Signup"}>Register</NavLink>
      </div>
    </div>
  );
};

export default Login;