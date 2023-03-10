import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import '../css/card.css'
import { DELETE } from "../../redux/action/action";
import Toast from "../Toast";

const ShortList = () => {

  const [list, setList] = useState([]);
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();

  const shortlistedData = useSelector((state) => state.shortlistReducer.Shortlists);

  const deleteHouse = (id) => {
    dispatch(DELETE(id));
    Toast("Item Removed","error");
  };

  const compare = () => {
    let comparedata = shortlistedData.filter((e) => {
      return e.id == id;
    });
    setList(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
    {shortlistedData.length?(
      <div className="container mt-5 shortlist">
        <h2 className="text-center">SHORTLISTED HOUSE DETAILS</h2>

        <section className="container mt-5">
          <div className="row d-flex iteamsdetails-shortlist">
            {list.map((elem) => {
              return (
                <>
                  <div className="items_img">
                    <img src={elem.addimg} alt="shortlist"/>
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
                      <td className="Ltrash">
                          <p>
                            <i
                              onClick={() => deleteHouse(elem.id)}
                              className="fas fa-trash largetrash"
                            ></i>
                          </p>
                      </td>  
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>):(<div>
        <h2 className="noItem-text">
        NO ITEMS WHERE SHORTLISTED
        </h2>
        <button className="noItem-button" onClick={()=>{navigate(-1)}} >Go Back</button>
      </div>)}
    </>
  );
};

export default ShortList;