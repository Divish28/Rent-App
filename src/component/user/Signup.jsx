import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/signup.css";
import {eye} from 'react-icons-kit/fa/eye'
import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'
import Icon from "react-icons-kit";

const Signup = () => {
  const [user,setUser] = useState(
      {
        userName:"",
        email:"",
        mobileNumber:"",
        password:""
      }
    )
  const handleChange = (event) => {
    // const {name,value} = event.target
    setUser(()=> {
      return {...user,[event.target.name]:event.target.value}
    })
  }
  // const [userName, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [password, setPassword] = useState("");
  const [type,setType]=useState("password")
  const [icon,setIcon]=useState(eyeSlash)
  const navigation = useNavigate();

  const areAllFieldsFilled = user === ""
  //  userName === "" || email === "" || mobileNumber === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    let registerData = { ...user };
    console.log(registerData);
    axios
      .post("http://localhost:8000/user", registerData)
      .then((res) => {
        alert("registered");
        navigation("/Login");
      })
      .catch((error) => {
        alert("Not registered:" + error);
      });
  };

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

  return (
    <div>
      <h1 className="Signup-Heading">Signup</h1>
      <form className="Signup-form" onSubmit={handleSubmit}>
        <label htmlFor="userName">Username:</label>
        <input
          className="signup-input"
          name="userName"
          onChange={handleChange}
          type="text"
          required
          placeholder="User Name"
        />
        <label htmlFor="email">E-mail:</label>
        <input
          className="signup-input"
          name="email"
          onChange={handleChange}
          type="email"
          title="Enter Correct Email formate"
          required
          placeholder="E-mail"
        />
        <label htmlFor="mobileNumber">Mobile :</label>
        <input
          className="signup-input"
          name="mobileNumber"
          onChange={handleChange}
          required
          type="text"
          placeholder="Mobile Number"
        />
        <label htmlFor="password">Password:</label>
        <input
          className="signup-input"
          name="password"
          onChange={handleChange}
          type={type}
          title="Password should contain atleast 8 Characters,
                 1 Uppercase, 1 Lowwercase 1 Special Character"
          required
          placeholder="Password"
          pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        /><span onClick={handleToggle}><Icon icon={icon} /></span>
        <input
          id="signup-submit"
          // hidden={areAllFieldsFilled}
          disabled={areAllFieldsFilled}
          type="submit"
        />
      </form>
      <div className="Existing-user">
      Existing user ? <NavLink to={"/Login"}>Login</NavLink>
      </div>
    </div>
  );
};

export default Signup;