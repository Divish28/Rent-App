import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './css/card.css'

const ShortList = () => {

  const [list, setList] = useState([]);
  
  const navigate = useNavigate()

  const { id } = useParams();

  const getData = useSelector((state) => state.shortlistReducer.Shortlists);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setList(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-5 shortlist">
        <h2 className="text-center">SHORTLISTED HOUSE DETAILS</h2>

        <section className="container mt-5">
          <div className="iteamsdetails">
            {list.map((elem) => {
              return (
                <>
                  <div className="items_img">
                    <img src={elem.addimg} alt="" style={{height:"30rem"}}/>
                  </div>

                  <div className="details">
                    <Table>
                    <tr>
                        <td>
                          <p>
                            <strong>City: </strong> {elem.city}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Rooms</strong> : {elem.type}
                          </p>
                          <p>
                            <strong>Rent</strong> : ₹{elem.rent}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Owner Name:</strong> {elem.name}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Owner Number:</strong> {elem.number}
                          </p>
                        </td>
                      </tr>
                      <tr>
                      <td>
                          <p>
                            <strong>Furnished: </strong>{elem.furnished}
                          </p>
                        </td>
                      </tr>
                      <tr>
                      <td>
                          <p>
                            <strong>Description:</strong>{elem.description}
                          </p>
                        </td>
                      </tr>
                      <tr>
                      <td>
                         <button onClick={()=>navigate(-1)}>GO BACK</button>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default ShortList;
