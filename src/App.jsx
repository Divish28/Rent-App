import './App.css';
import Header from './component/layout/Header';
import Cards from './component/listing/Cards'
import { Route,Routes } from 'react-router-dom';
import Login from './component/user/Login';
import Signup from './component/user/Signup';
import Home from './component/layout/Home';
import ShortList from './component/listing/ShortList';
import Invalid from './component/user/Invalid';
import Details from './component/listing/Details';
import ProtectedRoute from './component/user/ProtectedRoute';
import { useState } from 'react';

const App =()=> {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Listing" element={<ProtectedRoute><Cards/></ProtectedRoute>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/ShortList" element={<ProtectedRoute><ShortList/></ProtectedRoute>}/>
        <Route path="/Details/:id" element={<ProtectedRoute><Details/></ProtectedRoute>}/>
        <Route path="*" element={<Invalid/>}/>
      </Routes>
    </div>
  );
}

export default App;