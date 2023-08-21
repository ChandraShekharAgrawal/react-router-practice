import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        //console.log(response.data);
        setHostVans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const displayVans = hostVans.filter((van) => van.hostId === 123);
  //console.log(displayVans);

  return (
    <>
      <h3 style={{ marginLeft: "20px" }}>Your Listed Vans</h3>
      <div className="hostVans">
        {displayVans.map((van) => (
          <Link to={`/host/vans/${van.id}`} className="no-underline">
            <div key={van.id} className="hostVan">
              <img src={van.imageUrl} alt={van.name} className="hostVanImage" />
              <p className="hostVanName">{van.name} </p>
              <p className="hostVanPrice">${van.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HostVans;
