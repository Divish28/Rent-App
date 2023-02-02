import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/signup.css";
import {eye} from 'react-icons-kit/fa/eye'
import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'
import Icon from "react-icons-kit";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [type,setType]=useState("password")
  const [icon,setIcon]=useState(eyeSlash)
  const navigation = useNavigate();

  const areAllFieldsFilled =
    userName === "" || email === "" || mobileNumber === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    let registerData = { userName, email, mobileNumber, password };
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
        <label>Username:</label>
        <input
          className="signup-input"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
          placeholder="User Name"
        />
        <label>E-mail:</label>
        <input
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          title="Enter Correct Email formate"
          required
          placeholder="E-mail"
        />
        <label>Mobile :</label>
        <input
          className="signup-input"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
          type="text"
          placeholder="Mobile Number"
        />
        <label>Password:</label>
        <input
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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