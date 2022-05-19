import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import "./appointments.css";
import BarberStep from "./components/BarberStep/BarberStep";
import ServicesStep from "./components/ServicesStep/ServicesStep";
import CustomerStep from "./components/CustomerStep/CustomerStep";
import DateTimeStep from "./components/DateTimeStep/DateTimeStep";
import ConfirmationStep from "./components/ConfirmationStep";
import Axios from "axios";

// const FormStepTracker = () => {
//   return (
//     <div className="form-step-tracker">
//       <span>
//         <p>Barber</p>
//       </span>
//       <ArrowRightAltIcon />
//       <span>
//         <p>Services</p>
//       </span>
//       <ArrowRightAltIcon />
//     </div>
//   );
// };

const SERVICE_DURATION = 30;
const OPEN_TIME = 1000;
const CLOSE_TIME = 1800;

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
  const { services, barbers } = useGlobalContext();
  const [currentStep, setCurrentStep] = useState(0);
  const formDataRef = useRef({
    barber: null,
    services: [],
    dateTime: {
      date: new Date(),
      time: null,
    },
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const FormStep = () => {
    const steps = [
      <BarberStep barbers={barbers} formDataRef={formDataRef} />,
      <ServicesStep services={services} formDataRef={formDataRef} />,
      <DateTimeStep
        availableTimeSlots={AVAILABLE_TIME_SLOTS}
        formDataRef={formDataRef}
      />,
      <CustomerStep formDataRef={formDataRef} />,
      <ConfirmationStep
        formDataRef={formDataRef}
        barbers={barbers}
        availableServices={services}
      />,
    ];

    return <>{steps[currentStep]}</>;
  };

  const handleNewAppointment = (formData) => {
    const formDataCopy = { ...formData };
    const { date, time } = formDataCopy.dateTime;
    formDataCopy.dateTime = new Date(`${date} ${time}`);
    console.log(`formDataCopy`, formDataCopy);
    // Axios.post("http://localhost:3000/appointments/create", { data: formData });
  };

  const handleNextButton = (e) => {
    e.preventDefault();
    if (currentStep === 4) {
      return handleNewAppointment(formDataRef.current);
    }
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
  };

  return (
    <div className="appointments">
      <div className="form-container">
        <form onSubmit={handleNextButton}>
          <FormStep />
          <div className="button-group">
            <button
              disabled={currentStep === 0}
              type="button"
              className="previous"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              BACK
            </button>
            <button type="button" className="next" onClick={handleNextButton}>
              {currentStep === 4 ? "SUBMIT" : "NEXT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
