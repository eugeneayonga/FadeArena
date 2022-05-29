import "./form.css";
import React, { useRef } from "react";

const addFormDataPropToTextField = (child, prop) => {
  if (child.props.formElement) {
    return React.cloneElement(child, { formData: prop });
  }
};

const addFormDataProp = (children, prop) => {
  if (React.Children.count(children) === 1) {
    if (children.props.formElement)
      return React.cloneElement(children, { formData: prop });
    if (children.props.children) {
    }
  }
  const newChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, { formData: prop });
  });
  return newChildren;
};

const Form = ({ onSubmit: submit, children, ...otherProps }) => {
  console.log("children", children);

  const formData = useRef({});
  const newChildren = addFormDataProp(children, formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData.current);
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {newChildren}
    </form>
  );
};

export default Form;
