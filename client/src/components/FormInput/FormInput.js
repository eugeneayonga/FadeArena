import { useState, useEffect } from "react";
import { camelCaseToKebabCase } from "../../helpers/stringHelpers";
import "./formInput.css";

const FormInput = ({
  id,
  children,
  className,
  type,
  formDataRef,
  required = false,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    formDataRef.current[id] = inputValue;
  }, [inputValue, id, formDataRef]);

  const requiredStar = required ? "*" : "";

  return (
    <span
      className={`form-input-container ${
        className || camelCaseToKebabCase(id) || ""
      }-container`}
    >
      <label htmlFor={id}>
        {`${children} `}
        <span className="required-star">{`${requiredStar}`}</span>
      </label>
      <input
        type={type || "text"}
        id={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        {...otherProps}
      />
    </span>
  );
};

export default FormInput;
