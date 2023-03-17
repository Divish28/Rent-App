import React from 'react'
import { Navigate } from 'react-router-dom'

const LoginProtect = ({children}) => {
    const loginProtect = sessionStorage.getItem("session data")

    if(loginProtect.length > 0){
        return <Navigate to="/Listing" replace/>
    }
    return children
}

export default LoginProtect