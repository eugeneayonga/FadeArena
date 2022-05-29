import "./formStep.css";
import { createContext, useRef, useContext } from "react";
import { useFormContext } from "../PaginatedForm/PaginatedForm";

const StepContext = createContext();

const FormStep = ({ stepTitle, children, ...otherProps }) => {
  const { updateFormData, stepCount } = useFormContext();
  const formStepData = useRef({});
  const updateFormStepData = (key, value) => {
    formStepData.current[key] = value;
    updateFormData(key, value);
  };
  return (
    <StepContext.Provider value={{ updateFormStepData }}>
      <h2 className="step-title">{stepTitle}</h2>
      {children}
    </StepContext.Provider>
  );
};

export const useStepContext = () => {
  const ctx = useContext(StepContext);
  // error handling here
  return ctx;
};

export default FormStep;
