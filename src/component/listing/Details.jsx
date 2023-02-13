import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "../css/card.css";
import HouseData from "../HouseData";

const Details = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

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
          <div className="iteamsdetails-detail">
            {list.map((details) => {
              return (
                <>
                  <div className="items_img">
                    <img src={details.addimg} alt="details" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>City</strong> : {details.city}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Rooms</strong> : {details.type}
                          </p>
                          <p>
                            <strong>Rent</strong> : ₹{details.rent}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Owner Name:</strong> {details.name}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Owner Number:</strong> {details.number}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Furnished: </strong>
                            {details.furnished}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <strong>Description:</strong>
                            {details.description}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button id="goBack" onClick={() => navigate(-1)}>
                            GO BACK
                          </button>
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
