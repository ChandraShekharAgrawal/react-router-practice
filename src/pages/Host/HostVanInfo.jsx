import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { hostVan } = useOutletContext();
  //console.log(hostVan);
  return (
    <section className="hostVanInfo">
      <p>
        <strong>Name:</strong> {hostVan.name}
      </p>
      <p>
        <strong>Category:</strong> {hostVan.type}
      </p>
      <p>
        <strong>Description:</strong> {hostVan.description}
      </p>
      <p>
        <strong>Visibility:</strong> Public
      </p>
    </section>
  );
};

export default HostVanInfo;
