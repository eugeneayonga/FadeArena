import React, {
  createContext,
  useRef,
  useState,
  useMemo,
  useContext,
} from "react";

import "./paginatedForm.css";

const PaginatedFormContext = createContext();

const PaginatedForm = ({
  children,
  id = "paginatedForm",
  submit,
  firstStep = 1,
  ...otherProps
}) => {
  const [stepCount, setStepCount] = useState(firstStep);

  const isFirstStep = stepCount === firstStep;

  const isLastStep = stepCount === React.Children.count(children);

  const handleBackBtnClick = () => {
    if (isFirstStep) return console.error("This is already the first step");
    setStepCount(() => stepCount - 1);
  };

  const handleNextBtnClick = () => {
    if (isLastStep) return submit();
    setStepCount(() => stepCount + 1);
  };

  const formSteps = () => {
    if (React.Children.count(children) === 1) {
      return [children];
    }
    return children;
  };

  console.log("Step count", stepCount);
  console.log("Child count", React.Children.count(children));
  console.log("Last step?", isLastStep);

  return (
    <PaginatedFormContext.Provider value={{ stepCount }}>
      <form id={id} {...otherProps}>
        {formSteps()[stepCount - 1]}
      </form>
      <div className="form-controls">
        <button onClick={handleBackBtnClick}>Back</button>
        <button onClick={handleNextBtnClick}>Next</button>
      </div>
    </PaginatedFormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(PaginatedFormContext);
  // error handling here
  return ctx;
};

export default PaginatedForm;
