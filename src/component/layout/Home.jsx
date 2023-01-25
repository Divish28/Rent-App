import React from 'react'
import house from '../images/House.jpg'
import '../css/home.css'

const Home=()=> {
  return (
    <>
    <div className='homepage'>
      <h4 className='hometext'>WELCOME HOME</h4> 
      <img className='homeimg' src={house} alt="House"/>
    </div>
    </>
  )
}

export default Home