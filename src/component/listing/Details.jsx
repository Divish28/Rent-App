import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import "../css/card.css";
import HouseData from "../HouseData";

const Details = () => {

  const navigate = useNavigate()
  const { id } = useParams();
  
  const [list, setList] = useState([]);

  const compare = () => {
    let comparedata = HouseData.filter((e) => {
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
        <h2 className="text-center">DETAILS</h2>

        <section className="container mt-5">
          <div className="iteamsdetails">
            {list.map((elem) => {
              return (
                <>
                  <div className="items_img">
                    <img src={elem.addimg} alt="detail-image"/>
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
export default Details;