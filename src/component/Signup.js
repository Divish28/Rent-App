import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/signup.css";
// import Login from './Login'

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div>
      <h1 className="Signup-Heading">Signup</h1>
      <form className="Signup-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
          placeholder="User Name"
        />
        <label>E-mail:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          placeholder="E-mail"
        />
        <label>Mobile :</label>
        <input
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
          type="text"
          placeholder="Mobile Number"
        />
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        />
        <input
          id="signup-submit"
          // hidden={areAllFieldsFilled}
          disabled={areAllFieldsFilled}
          type="submit"
        />
      </form>
      <div className="Existing-user">
        <NavLink to={"/Login"}>Existing user</NavLink>
      </div>
    </div>
  );
};

export default Signup;
