import "./textField.css";
import { useState, useEffect } from "react";

const TextField = (props) => {
  const { id, label, formData, type, required, ...otherProps } = props;

  const [textValue, setTextValue] = useState(formData.current[id] || "");

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  useEffect(() => {
    formData.current[id] = textValue;
  }, [id, formData, textValue]);

  return (
    <>
      <label htmlFor={id}>
        {label}
        <span className="required-star">{required ? "*" : ""}</span>
      </label>
      <input
        id={id}
        type={type || "text"}
        value={textValue}
        onChange={handleChange}
        required={required}
        {...otherProps}
      />
    </>
  );
};

export default TextField;
