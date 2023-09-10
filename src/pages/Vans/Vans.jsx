import { useState, useEffect } from "react";
import axios from "axios";
import "./Vans.css";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const filterVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div>
      <h1>Explore our van options</h1>
      <div className="vanList-filter-buttons">
        <Link to="?type=simple">simple</Link>
        <Link to="?type=luxury">luxury</Link>
        <Link to="?type=rugged">rugged</Link>
        <Link to="">clear filters</Link>
      </div>
      <ul className="vans">
        {filterVans.map((van) => (
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
