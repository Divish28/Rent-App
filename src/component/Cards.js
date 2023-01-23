import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import HouseData from "./HouseData";
import { ADD, DISP } from "../redux/action/action";
import "./css/card.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Details from "./Details";

const Cards = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();


  const [list, setList] = useState(HouseData);

  const sumbitSearch = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };


  return (
    <div className="container mt-3 Listing">
      <h2 className="text-center mt-4">HOUSE LIST</h2>
      <div className="row d-flex justified-content-center align-item-center">
        {list.map((element, id) => {
          return (
            <>
              <Card
                
                className="mx-2 mx-4 card_style"
              >
                <Card.Img
                  onClick={()=>navigate(`/Details/${element.id}`)}
                  variant="top"
                  src={element.addimg}
                  className="mt-3 cardimg"
                />
                <Card.Body onClick={()=>navigate(`/Details/${element.id}`)}>
                  <Card.Title><strong>City: </strong>{element.city}</Card.Title>
                  <Card.Text><strong>Type: </strong>{element.category}</Card.Text>
                  <Card.Text><strong>Rooms: </strong>{element.type}</Card.Text>
                </Card.Body>
                <div className="shortlistbutton">
                  <Button
                    onClick={() => send(element)}
                    variant="primary"
                    className="col-lg-12"
                  >
                    Shortlist
                  </Button>
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
