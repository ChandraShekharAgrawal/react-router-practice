import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { hostVan } = useOutletContext();
  return (
    <img
      src={hostVan.imageUrl}
      alt={hostVan.name}
      style={{ width: "140px", height: "140px", marginLeft: "10px" }}
    />
  );
};

export default HostVanPhotos;
