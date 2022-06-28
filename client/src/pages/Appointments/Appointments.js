import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useResources } from "../../context/ResourcesContext";
import PaginatedForm from "../../components/PaginatedForm/PaginatedForm";

import BarberStep from "./components/BarberStep/BarberStep";
import ServicesStep from "./components/ServicesStep/ServicesStep";
import CustomerStep from "./components/CustomerStep/CustomerStep";
import DateTimeStep from "./components/DateTimeStep/DateTimeStep";
import ConfirmationStep from "./components/ConfirmationStep";

import "./appointments.css";

const AVAILABLE_TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
];

const Appointments = () => {
  const { resources } = useResources();
  const formData = useRef({});
  const { currentUser } = useUser().state;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formDataCopy = { ...formData.current };
    const { date, time } = formDataCopy.dateTime;
    const dateTime = new Date(`${date} ${time}`);
    formDataCopy.appointment_date = dateTime;
    console.log(`formDataCopy`, formDataCopy);
    fetch("/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataCopy),
    })
      .then((res) =>
        res.ok
          ? navigate("/", { state: { appointment_date: dateTime } })
          : new Error("Couldn't book appointment")
      )
      .catch(console.error);
  };

  const addCurrentUserToFormData = () => {
    const { first_name, last_name, phone_number } = currentUser.client;
    formData.current = {
      ...formData.current,
      first_name,
      last_name,
      phone_number,
    };
  };

  return (
    <div className="appointments">
      {resources && (
        <div className="form-container">
          <PaginatedForm
            className="appointment-form"
            id="paginatedForm"
            firstStep={currentUser ? 2 : 1}
            submit={handleSubmit}
          >
            {currentUser ? (
              addCurrentUserToFormData()
            ) : (
              <CustomerStep formData={formData} />
            )}
            <BarberStep barbers={resources.barbers} formData={formData} />
            <ServicesStep services={resources.services} formData={formData} />
            <DateTimeStep
              availableTimeSlots={AVAILABLE_TIME_SLOTS}
              formData={formData}
            />
            <ConfirmationStep
              barbers={resources.barbers}
              availableServices={resources.services}
              formData={formData}
            />
          </PaginatedForm>
        </div>
      )}
    </div>
  );
};

export default Appointments;

/*
            <BarberStep barbers={resources.barbers} />
            <ServicesStep services={resources.services} />
            <DateTimeStep availableTimeSlots={AVAILABLE_TIME_SLOTS} />
            <CustomerStep />
            <ConfirmationStep
              barbers={resources.barbers}
              availableServices={resources.services}
            />
*/
