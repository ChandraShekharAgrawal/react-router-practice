import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "./Vans.css";

const VanDetail = () => {
  const params = useParams();
  //console.log(params.id);

  const [van, setVan] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${params.id}`)
      .then((response) => {
        //console.log(response.data);
        setVan(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {van ? (
        <div className="singleVan">
          <img src={van.imageUrl} alt={van.name} className="vanImage" />
          <p>{van.name} </p>
          <p>${van.price}/day</p>
          <p className="van-description">${van.description}</p>
          {van.type === "simple" ? (
            <p className="simpleType">Simple</p>
          ) : van.type === "rugged" ? (
            <p className="ruggedType">Rugged</p>
          ) : (
            <p className="luxuryType">Luxury</p>
          )}
          <button className="rent-button">Rent this Van</button>
        </div>
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

export default VanDetail;
