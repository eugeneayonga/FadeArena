import React from "react";
import "./confirmationStep.css";
import FormStep from "../../../../.dev/FormStep/FormStep";

const ConfirmationStep = ({ formData }) => {
  console.log(formData);
  return (
    <FormStep>
      {Object.entries(formData.current).map((entry) => {
        return (
          <React.Fragment key={entry[0]}>
            <h3>{entry[0]}</h3>
            <h4>{entry[1]}</h4>
          </React.Fragment>
        );
      })}
    </FormStep>
  );
};

export default ConfirmationStep;
