import { useState, useEffect } from "react";
import axios from "axios";
import "./Vans.css";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        console.log(response.data);
        setVans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Explore our van options</h1>
      <ul className="vans">
        {vans.map((van) => (
          <Link key={van.id} to={`/vans/${van.id}`} className="no-underline">
            <li className="van">
              <img src={van.imageUrl} alt={van.name} className="vanImage" />
              <p>{van.name} </p>
              <p>${van.price}/day</p>
              {van.type === "simple" ? (
                <p className="simpleType">Simple</p>
              ) : van.type === "rugged" ? (
                <p className="ruggedType">Rugged</p>
              ) : (
                <p className="luxuryType">Luxury</p>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Vans;
