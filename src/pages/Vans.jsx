import { useState, useEffect } from "react";
import axios from "axios";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVans(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return <div>I'm Van</div>;
};

export default Vans;
