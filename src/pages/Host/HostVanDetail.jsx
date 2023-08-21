import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Vans/Vans.css";

const HostVanDetail = () => {
  const params = useParams();
  //console.log(params.id);
  const [hostVan, setHostVan] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${params.id}`)
      .then((response) => {
        //console.log(response.data);
        setHostVan(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Link to="/host/vans" style={{ marginLeft: "10px" }}>
        Back to all vans
      </Link>
      <div className="nestedHostVan">
        <div style={{ marginTop: "30px", marginBottom: "10px" }}>
          <div className="hostVan">
            <img
              src={hostVan.imageUrl}
              alt={hostVan.name}
              className="hostVanDetailImage"
            />
            {hostVan.type === "simple" ? (
              <p className="simpleType">Simple</p>
            ) : hostVan.type === "rugged" ? (
              <p className="ruggedType">Rugged</p>
            ) : (
              <p className="luxuryType">Luxury</p>
            )}
            <p className="hostVanDetailName">{hostVan.name} </p>
            <p className="hostVanDetailPrice">${hostVan.price}/day</p>
          </div>
        </div>
        <nav className={"host-nav"}>
          <NavLink
            to={`/host/vans/${hostVan.id}`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Details
          </NavLink>
          <NavLink
            to={`/host/vans/${hostVan.id}/pricing`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to={`/host/vans/${hostVan.id}/photos`}
            className={({ isActive }) => (isActive ? "active-link" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ hostVan }} />
      </div>
    </>
  );
};

export default HostVanDetail;
