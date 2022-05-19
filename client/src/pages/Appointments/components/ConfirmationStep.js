import { v4 as uuid } from "uuid";

const ConfirmationStep = ({ formDataRef, barbers, availableServices }) => {
  const { barber, services, dateTime, customer } = formDataRef.current;

  const barberName = barbers.find((b) => b.id === barber)?.name || "";

  const servicesDetails = services.map((s) => {
    const service = availableServices.find((srvc) => srvc.id === s);
    return `${service.name} - $${service.price}`;
  });

  console.log(`formData`, formDataRef.current);

  return (
    <div className="confirmation step 4">
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
        <li>First Name: {customer.firstName}</li>
        <li>Last Name: {customer.lastName}</li>
        <li>Email: {customer.email}</li>
        <li>Phone Number: {customer.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default ConfirmationStep;
