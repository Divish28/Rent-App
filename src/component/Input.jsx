import React, { useState } from 'react'

const Input = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
  return (
    <div>
        <forms>
            <lable>Name: </lable>
            <input type="text"/>
            <label>Email: </label>
            <input value={()=>setEmail(email.tar)} type="email"/>
        </forms>
    </div>
  )
}

export default Input