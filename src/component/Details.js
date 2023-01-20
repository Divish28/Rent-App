import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './css/card.css'
import { DISP } from '../redux/action/action'

const Details=()=> {

  const [details,setDetails]=useState()
  const dispatch=useDispatch()

  const getDetails=useSelector((state) => state.shortlistReducer.Shortlists)

  const imp = (elem) => {
    dispatch(DISP(elem))
  }

  const{id}= useParams()

  return(
    <>
    {
    getDetails.length ?
                  <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                    <Table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          getDetails.map((e) => {
                            return (
                              <>
                              <div>
                                <h2>true</h2>
                                <table>
                                  <tr>
                                    <td>
                                      <img src={e.addimg} />
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              </>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                  </div> 
                  :
                    <h2> False </h2>
              }

    </>
  )
}
export default Details