import "./servicesStep.css";
import { useState } from "react";

// const addService = (e) => {
//   console.log(`e.target`, e.target);
//   const { id } = e.target;
//   const servicesCopy = [...services];
//   servicesCopy.push(id);
//   updateSelectedServices(servicesCopy);
// };

// const handleAddService = (id) => {
//   console.log(`CHECKED! - id#${id}`);
//   const servicesCopy = [...services];
//   servicesCopy.push(id);
//   updateSelectedServices(servicesCopy);
// };

const ServicesStep = ({ services, formDataRef }) => {
  const [servicesIds, setServicesIds] = useState(formDataRef.current.services);
  const Service = (s) => {
    const handleButtonClick = () => {
      const selectedServicesCopy = [...servicesIds];
      const idx = selectedServicesCopy.indexOf(s.id);
      if (idx < 0) {
        selectedServicesCopy.push(s.id);
      } else {
        selectedServicesCopy.splice(idx);
      }
      formDataRef.current.services = selectedServicesCopy;
      setServicesIds(selectedServicesCopy);
    };

    const checked = servicesIds.find((id) => id === s.id) ? true : false;

    return (
      <div key={s.id} className="service">
        <span>
          <label>
            <p>{`${s.name} - $${s.price}.00`}</p>
            <input
              type="checkbox"
              name="services"
              id={`service${s.id}`}
              value={s.price}
              checked={checked}
              onChange={() => {}}
            />
          </label>
        </span>
        <span className="button-wrapper">
          <button
            type="button"
            className={checked ? "checked" : ""}
            onClick={() => handleButtonClick(s.id)}
          >
            {checked ? "REMOVE" : "ADD"}
          </button>
        </span>
      </div>
    );
  };

  return (
    <div className="services-container step-2">
      <h2>Please, select your services:</h2>
      <div className="services">{services.map(Service)}</div>
    </div>
  );
};

export default ServicesStep;
