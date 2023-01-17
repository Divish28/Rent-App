import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import HouseData from './HouseData';
import {ADD} from '../redux/action/action'
import './css/card.css'

function Cards() {

    const[city,setCity]=useState("")

    const [list, setList] = useState(HouseData)
   
    const sumbitSearch = (e) => {
        e.preventDefault()

    }

    const dispatch= useDispatch()
    const send = (e) =>{
        dispatch(ADD(e))
    }


    return (
        <div className='container mt-3'>
            <h2 className='text-center'>This is listing</h2>
            <div>
                <form onSubmit={sumbitSearch} >
                    <lable>City:</lable>
                    <input type="search" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter city' />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="row d-flex justified-content-center align-item-center" >
                {
                    list.map((element, id) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', border:"none" }}className="mx-2 mx-4 card_style" >
                                    <Card.Img variant="top" src={element.addimg} style={{height:"16rem"}} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.city}</Card.Title>
                                        <Card.Text>
                                            {element.category}
                                        </Card.Text>
                                        <div>
                                        <Button onClick={()=>send(element)} variant="primary" className='col-lg-12'>Shortlist</Button>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards