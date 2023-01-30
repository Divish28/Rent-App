import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import HouseData from "../HouseData";
import { ADD } from "../../redux/action/action";
import "../css/card.css";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  
  const navigate = useNavigate();

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState(HouseData);

  const auth = sessionStorage.getItem("email");

  const showToastMessage = () => {
    toast.success('Shortlisted !', {
        position: toast.POSITION.TOP_CENTER
    });
};

const showToastErrorMessage = () => {
  toast.error(`Login to view details`, {
      position: toast.POSITION.TOP_CENTER
  });
};

const showToastShortlistMessage = () => {
  toast.error('Login to Shortlist the House', {
      position: toast.POSITION.TOP_CENTER
  });
};



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

  const handleSumbit = (e) =>{
    e.preventDefault()
  }

  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
    showToastMessage();
  };

  return (
    <div className="container mt-3 Listing">
      <h2 className="text-center mt-4">HOUSE LIST</h2>
      <form onSubmit={handleSumbit} className="Search-form mt-4">
        <label className="search-label"> Filter By :</label>
        <input
          onChange={(e) => searchItems(e.target.value)}
          className="search-bar mt-4"
          type="search"
          placeholder=" City or Type or Rooms"
        />
        {/* <input classname="search-button" type="submit" value="Submit" /> */}
      </form>
      <div className="row d-flex cardList">
        {searchInput.length > 1
          ? filteredResults.map((element) => {
              return auth ? (
                <>
                  <Card className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() => navigate(`/Details/${element.id}`)}
                      variant="top"
                      src={element.addimg}
                      alt="House"
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
                        className="shortlist-button"
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
                      onClick={() => showToastErrorMessage()}
                      variant="top"
                      src={element.addimg}
                      alt="House"
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() => showToastErrorMessage()}
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
                        onClick={() =>showToastShortlistMessage()}
                        variant="primary"
                        className="shortlist-button"
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
                      alt="House"
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
                        className="shortlist-button "
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
                      onClick={() => showToastErrorMessage()}
                      variant="top"
                      src={element.addimg}
                      alt="House"
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() => showToastErrorMessage()}
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
                        onClick={() =>showToastShortlistMessage()}
                        variant="primary"
                        className="shortlist-button"
                      >
                        Shortlist
                      </Button>
                      </div>
                  </Card>
                </>
              );
            })}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Cards;