import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/layout/Header';
import Login from './component/user/Login';
import Signup from './component/user/Signup';
import Cards from './component/listing/Cards'
import Home from './component/layout/Home';
import ShortList from './component/listing/ShortList';
import Invalid from './component/user/Invalid';
import Details from './component/listing/Details';
import ProtectedRoute from './component/user/ProtectedRoute';
import LoginProtect from './component/user/LoginProtect';
import Navbar from './component/layout/Navbar';
import { useState,useEffect } from 'react';

const App =()=> {

  const [logged,setLogged]=useState(false)

  useEffect(() => {
    const user = sessionStorage.getItem("session data")
    if(user.length > 0){
      setLogged(true)
      console.log("Display is true")
    }
    else{
      setLogged(false)
    }
  })
  
  

  return (
    <div>

      <Navbar loginAuth={logged}/>
      {/* <Header/> */}
      <ToastContainer/>
      <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        <Route exact path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Listing" element={<Cards/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/ShortList/:id" element={<ProtectedRoute><ShortList/></ProtectedRoute>}/>
        <Route path="/Details/:id" element={<ProtectedRoute><Details/></ProtectedRoute>}/>
        <Route path="*" element={<Invalid/>}/>
      </Routes>
    </div>
  );
}

export default App;