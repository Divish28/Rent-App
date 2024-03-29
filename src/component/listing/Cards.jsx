import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/card.css";
import HouseData from "../HouseData";
import { ADD } from "../../redux/action/action";
import Toast from "../Toast";

const Cards = () => {
  const navigate = useNavigate();

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [list, setList] = useState(HouseData);

  const auth = sessionStorage.getItem("session data");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = list.filter((filteredHouse) => {
        return Object.values(filteredHouse)
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

  const detailsWarning = () =>
    Toast("Login to View Details", "warning");
  const shortlistWarning = () =>
    Toast("Login to Shortlist", "warning");

  const shortlist = (e) => {
    dispatch(ADD(e));
    Toast("Shortlisted !", "success");
  };

  return (
    <div className="container mt-3 Listing">
      <h2 className="text-center mt-4">HOUSE LIST</h2>
      <div className="search">
        <label className="search-label"> Filter By :</label>
        <input 
          onChange={(e) => searchItems(e.target.value)}
          className="search-bar mt-4"
          type="search"
          placeholder=" City or Type or Rooms"
        />
        </div>
        
      <div className="row d-flex cardList">
        {searchInput.length > 1
          ? filteredResults.map((filteredHouse) => {
              return auth ? (
                <>
                  <Card className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() =>
                        navigate(
                          `/Details/${filteredHouse.id}`
                        )
                      }
                      variant="top"
                      src={filteredHouse.addimg}
                      alt="House"
                      className="mt-3 cardimg"
                    />
                    <Card.Body
                      onClick={() =>
                        navigate(
                          `/Details/${filteredHouse.id}`
                        )
                      }
                    >
                      <Card.Title>
                        <strong>City: </strong>
                        {filteredHouse.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {filteredHouse.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {filteredHouse.type}
                      </Card.Text>
                    </Card.Body>
                    <div className="shortlistbutton">
                      <Button
                        onClick={() => shortlist(filteredHouse)}
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
                      onClick={detailsWarning}
                      variant="top"
                      src={filteredHouse.addimg}
                      alt="House"
                      className="mt-3 cardimg"
                    />
                    <Card.Body onClick={detailsWarning}>
                      <Card.Title>
                        <strong>City: </strong>
                        {filteredHouse.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {filteredHouse.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {filteredHouse.type}
                      </Card.Text>
                    </Card.Body>
                    <div className="shortlistbutton">
                      <Button
                        onClick={shortlistWarning}
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
          : list.map((House) => {
              return auth ? (
                <>
                  <Card key={House.id} className="mx-2 mx-4 card_style">
                    <Card.Img
                      onClick={() =>
                        navigate(`/Details/${House.id}`)
                      }
                      variant="top"
                      src={House.addimg}
                      className="mt-3 cardimg"
                      alt="House"
                    />
                    <Card.Body
                      onClick={() =>
                        navigate(`/Details/${House.id}`)
                      }
                    >
                      <Card.Title>
                        <strong>City: </strong>
                        {House.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {House.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {House.type}
                      </Card.Text>
                    </Card.Body>
                    <div className="shortlistbutton">
                      <Button
                        onClick={() =>shortlist(House)}
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
                      onClick={detailsWarning}
                      variant="top"
                      src={House.addimg}
                      alt="House"
                      className="mt-3 cardimg"
                    />
                    <Card.Body onClick={detailsWarning}>
                      <Card.Title>
                        <strong>City: </strong>
                        {House.city}
                      </Card.Title>
                      <Card.Text>
                        <strong>Type: </strong>
                        {House.category}
                      </Card.Text>
                      <Card.Text>
                        <strong>Rooms: </strong>
                        {House.type}
                      </Card.Text>
                    </Card.Body>
                    <div className="shortlistbutton">
                      <Button
                        onClick={shortlistWarning}
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
    </div>
  );
};

export default Cards;
