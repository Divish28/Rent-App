import React from 'react'
import house from './images/House.jpg'
import './css/home.css'

function Home() {
  return (
    <>
    <div>
      <h4> WELCOME </h4>
    </div>
    <div>
      <img src={house} alt="House"/>
    </div>
    </>
  )
}

export default Home