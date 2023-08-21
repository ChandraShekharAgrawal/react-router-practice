import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { hostVan } = useOutletContext();
  return (
    <div className="hostVanPricing">
      <p>
        <strong>Price:</strong> ${hostVan.price}/day
      </p>
    </div>
  );
};

export default HostVanPricing;
