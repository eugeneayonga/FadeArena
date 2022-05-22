import "./signup.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/FormInput";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const signupUser = (user) =>
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());

const Signup = () => {
  const [formErrors, setFormErrors] = useState([]);

  const formDataRef = useRef(initialFormData);

  const handleSignup = async (e) => {
    e.preventDefault();
    const errors = [];
    const { password, passwordConfirmation } = formDataRef.current;
    if (password === "") errors.push("Password field cannot be empty");
    if (password !== passwordConfirmation)
      errors.push("Password fields must be matching");

    if (errors[0]) {
      console.log("ERRORS!");
      return setFormErrors(errors);
    }
    signupUser(formDataRef.current);
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        {formErrors &&
          formErrors.map((err, i) => (
            <p key={i} className="error">
              {err}
            </p>
          ))}
        <h3>Please, Signup!</h3>
        <form onSubmit={handleSignup}>
          <div className="names">
            <FormInput id="firstName" formDataRef={formDataRef} required>
              First Name
            </FormInput>
            <FormInput id="lastName" formDataRef={formDataRef}>
              Last Name
            </FormInput>
          </div>
          <div className="email-and-phone">
            <FormInput id="email" formDataRef={formDataRef} required>
              Email
            </FormInput>
            <FormInput id="phoneNumber" formDataRef={formDataRef} required>
              Phone Number
            </FormInput>
          </div>
          <div className="password-and-confirmation">
            <FormInput
              id="password"
              className="password"
              type="password"
              formDataRef={formDataRef}
              required
            >
              Password
            </FormInput>
            <FormInput
              id="passwordConfirmation"
              className="password-confirmation"
              type="password"
              formDataRef={formDataRef}
              required
            >
              Confirm Password
            </FormInput>
          </div>
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login!</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
