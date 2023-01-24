import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import HouseData from "./HouseData";
import { ADD } from "../redux/action/action";
import "./css/card.css";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  
  const navigate = useNavigate();

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState(HouseData);

  const auth = sessionStorage.getItem("email");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = list.filter((element) => {
        return Object.values(element)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(list);
    }
  };

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3 Listing">
      <h2 className="text-center mt-4">HOUSE LIST</h2>
      <form className="Search-form mt-4">
        <label className="search-label"> Filter By :</label>
        <input
          onChange={(e) => searchItems(e.target.value)}
          className="search-bar mt-4"
          type="search"
          placeholder=" City or Type or Rooms"
        />
        {/* <input classname="search-button" type="submit" value="Submit" /> */}
      </form>
      <div className="row d-flex justified-content-center align-item-center">
        {searchInput.length > 1
          ? filteredResults.map((element) => {
              return auth ? (
                <>
                  <Card className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() => navigate(`/Details/${element.id}`)}
                      variant="top"
                      src={element.addimg}
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() => navigate(`/Details/${element.id}`)}
                    >
                      <Card.Title>
                        <strong>City: </strong>
                        {element.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {element.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {element.type}
                      </Card.Text>
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
              ) : (
                <>
                  <Card className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() => navigate(`/Details/${element.id}`)}
                      variant="top"
                      src={element.addimg}
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() => navigate(`/Details/${element.id}`)}
                    >
                      <Card.Title>
                        <strong>City: </strong>
                        {element.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {element.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {element.type}
                      </Card.Text>
                    </Card.Body>
                    <div className="shortlistbutton">
                      <Button
                        onClick={() =>navigate('/Login')}
                        variant="primary"
                        className="col-lg-12"
                      >
                        Shortlist
                      </Button>
                    </div>
                  </Card>
                </>
              );
            })
          : list.map((element) => {
              return auth ? (
                <>
                  <Card className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() => navigate(`/Details/${element.id}`)}
                      variant="top"
                      src={element.addimg}
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() => navigate(`/Details/${element.id}`)}
                    >
                      <Card.Title>
                        <strong>City: </strong>
                        {element.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {element.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {element.type}
                      </Card.Text>
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
              ) : (
                <>
                  <Card className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() => navigate(`/Details/${element.id}`)}
                      variant="top"
                      src={element.addimg}
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() => navigate(`/Details/${element.id}`)}
                    >
                      <Card.Title>
                        <strong>City: </strong>
                        {element.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {element.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {element.type}
                      </Card.Text>
                    </Card.Body>
                    <div className="shortlistbutton">
                      <Button
                        onClick={() =>navigate('/Login')}
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
