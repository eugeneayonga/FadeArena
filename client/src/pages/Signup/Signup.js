import "./signup.css";
import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../context/UserContext";
import TextField from "../../components/TextField/TextField";
import Form from "../../components/Form/Form";

const Signup = () => {
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();
  const redirectHome = useCallback(() => navigate("/"), [navigate]);
  const {
    state: { currentUser },
    actions: { signup },
  } = useUser();

  const formData = useRef({});

  const handleSignup = async (e) => {
    e.preventDefault();
    const errors = [];
    const { password, password_confirmation } = formData.current;
    if (password === "") errors.push("Password field cannot be empty");
    if (password !== password_confirmation)
      errors.push("Password fields must be matching");
    if (errors[0]) return setFormErrors(errors);
    signup(formData.current);
    redirectHome();
  };

  useEffect(() => {
    currentUser && navigate("/");
  });

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
        <form id="Form" onSubmit={handleSignup}>
          <div className="names">
            <TextField
              formData={formData}
              id="first_name"
              label="First Name"
              required
            />
            <TextField formData={formData} id="last_name" label="Last Name" />
          </div>
          <div className="email-and-phone">
            <TextField formData={formData} id="email" label="Email" required />
            <TextField
              formData={formData}
              id="phone_number"
              label="Phone Number"
              required
            />
          </div>
          <div className="password-and-confirmation">
            <TextField
              formData={formData}
              id="password"
              label="Password"
              type="password"
              required
            />
            <TextField
              formData={formData}
              id="password_confirmation"
              label="Confirm Password"
              type="password"
              required
            />
          </div>
        </form>
        <button type="submit" form="Form">
          Signup
        </button>
        <p>
          Already have an account? <Link to="/login">Login!</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

/*
          <div className="names">
            <FormInput id="first_name" formDataRef={formDataRef} required>
              First Name
            </FormInput>
            <FormInput id="last_name" formDataRef={formDataRef}>
              Last Name
            </FormInput>
          </div>
          <div className="email-and-phone">
            <FormInput id="email" formDataRef={formDataRef} required>
              Email
            </FormInput>
            <FormInput id="phone_number" formDataRef={formDataRef} required>
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
              id="password_confirmation"
              className="password-confirmation"
              type="password"
              formDataRef={formDataRef}
              required
            >
              Confirm Password
            </FormInput>
          </div>
*/
