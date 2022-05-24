import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./paginatedForm.css";

const bookAppointment = () => {};
const PaginatedForm = ({ children }) => {
  const [step, setStep] = useState(0);
  const isLastStep = () => step === children.length - 1;
  const handlePrevButton = (e) => {
    if (step - 1 >= 0) setStep(() => step - 1);
  };
  const handleNextButton = (e) => {
    e.preventDefault();
    if (isLastStep()) return bookAppointment();
    setStep(() => step + 1);
  };
  return (
    <form id={`paginated-form-${uuid().slice(-5)}`}>
      {children[step]}
      <button className="prev-btn" type="button" onClick={handlePrevButton}>
        prev
      </button>
      <button
        className="prev-btn"
        type={isLastStep() ? "submit" : "button"}
        onClick={() => {}}
      >
        {isLastStep ? "Submit" : "Next"}
      </button>
    </form>
  );
};

export default PaginatedForm;
