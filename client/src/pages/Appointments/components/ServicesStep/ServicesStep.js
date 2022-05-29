import "./servicesStep.css";
import { useState } from "react";
import FormStep from "../../../../components/FormStep/FormStep";
import Service from "./Service";

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

const ServicesStep = ({ services, formData, ...otherProps }) => {
  const [selectedServices, setSelectedServices] = useState(
    formData.current.services || []
  );

  const handleClick = (id, isSelected) => {
    const selectedServicesCopy = [...selectedServices];
    if (isSelected) {
      const idx = selectedServices.indexOf(id);
      selectedServicesCopy.splice(idx, 1);
      formData.current.services = [...selectedServicesCopy];
      return setSelectedServices([...selectedServicesCopy]);
    }
    selectedServicesCopy.push(id);
    formData.current.services = [...selectedServicesCopy];
    setSelectedServices([...selectedServicesCopy]);
  };

  const checkIfSelected = (id) => formData.current?.services?.includes(id);

  return (
    <FormStep className="services-container" {...otherProps}>
      <h2 className="step-title">Services</h2>
      <h3>Please, select your services:</h3>
      <div className="services">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
            onClick={handleClick}
            selected={checkIfSelected(service.id)}
          />
        ))}
      </div>
    </FormStep>
  );
};

export default ServicesStep;
