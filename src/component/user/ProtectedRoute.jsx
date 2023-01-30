import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isLoggedin,children}) => {
    const [isLoggedin,setLoggedin]=useState(null)
    setLoggedin(()=>{
        sessionStorage.getItem("email")
    })
    
    if(!isLoggedin){
        return <Navigate to="/Login"replace/>
    }
  return children
}

export default ProtectedRoute