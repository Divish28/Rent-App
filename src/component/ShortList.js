import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ShortList = () => {


  const [list, setList] = useState([]);
  const { id } = useParams()


  const getData = useSelector((state) => state.shortlistReducer.Shortlists)
  // console.log(getData)


  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id
    })
    setList(comparedata)
  }

  useEffect(() => {
    compare()
  }, [id])



  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Shortlisted Items</h2>
        <section className='container mt-3'>
          <div className='itemsdetails'>
            {
              list.map((element) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={element.addimg} alt='' />
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>City :</strong>{element.city}</p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default ShortList