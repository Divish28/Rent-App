import React,{ useState, useEffect } from 'react'
import Header from './Header'
import LogoutNavbar from './LogoutNavbar'
import "../css/card.css";


const Navbar = (loginAuth) => {


    let menu;
    if(loginAuth==false){
        menu=(
            <LogoutNavbar/>
        )
    }
    else{
        menu=(
            <Header/>
        )
    }
    // const loginAuth = sessionStorage.getItem("session data")

    return (
        <div classname="sticky">
            {menu}
        </div>
    )
}

export default Navbar