import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./css/card.css";
import { DISP } from "../redux/action/action";

const Details = () => {

  const [list, setList] = useState([]);
  // console.log("elem", list);
  const navigate = useNavigate

  const { id } = useParams();
  // console.log(id)

  const getDetails = useSelector((state) => state.shortlistReducer.Shortlists);
  // console.log(getData)

  const compare = () => {
    let comparedata = getDetails.filter((e) => {
      return e.id == id;
    });
    setList(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);
  // const dispatch = useDispatch();
  // const [details, setDetails] = useState();

  // const getDetails = useSelector((state) => state.displayreducer.data);

  // const imp = (elem) => {
  //   dispatch(DISP(elem));
  // };

  return (
    <>
      {getDetails.length ? (
        <div className="card_details" style={{ width: "24rem", padding: 10 }}>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {getDetails.map((e) => {
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
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <h2> False </h2>
      )}
    </>
  );
};
export default Details;