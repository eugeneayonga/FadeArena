import { v4 as uuid } from "uuid";
import FormStep from "../../../components/FormStep/FormStep";

const ConfirmationStep = ({ formData, barbers, availableServices }) => {
  const {
    barber_id,
    services = [],
    dateTime = {},
    first_name,
    last_name,
    phone_number,
  } = formData.current;

  const barberName = barbers.find((b) => b.id === barber_id)?.name || "";

  const servicesDetails = services.map((s) => {
    const service = availableServices.find((srvc) => srvc.id === s);
    return `${service.name} - $${service.price}`;
  });

  console.log(`formData`, formData.current);

  return (
    <FormStep className="confirmation step 4">
      <h4>Barber: {barberName}</h4>
      <h4>Services: </h4>
      <ul>
        {servicesDetails.map((s) => (
          <li key={uuid()}>{s}</li>
        ))}
      </ul>
      <h4>
        Appointment Date: {dateTime.date} at {dateTime.time}
      </h4>
      <h4>Customer:</h4>
      <ul>
        <li>First Name: {first_name}</li>
        <li>Last Name: {last_name}</li>
        <li>Phone Number: {phone_number}</li>
      </ul>
    </FormStep>
  );
};

export default ConfirmationStep;
