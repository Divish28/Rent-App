import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/url.css'

const Invalid=()=>{
  const navigate = useNavigate()
  return (
    <div className='invalidMessage'>
        <h1>404 NOT FOUND</h1>
        <button onClick={()=>navigate(-1)} className='go-home'>Back</button>
    </div>
  )
}
export default Invalid