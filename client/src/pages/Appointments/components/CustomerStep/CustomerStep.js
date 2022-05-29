import FormStep from "../../../../components/FormStep/FormStep";
import TextField from "../../../../components/TextField/TextField";
import { Link, useLocation } from "react-router-dom";

const CustomerStep = ({ formData }) => {
  const location = useLocation();

  return (
    <FormStep className="form-step customer-info">
      <div className="row-1">
        <TextField
          formData={formData}
          id="first_name"
          label="First Name"
          required
        />
        <TextField formData={formData} id="last_name" label="Last Name" />
      </div>
      <div className="row-2">
        <TextField
          formData={formData}
          id="phone_number"
          label="Phone Number"
          required
        />
      </div>
      <h4>
        <Link to="/signup" state={{ redirectURL: location.pathname }}>
          Signup
        </Link>{" "}
        to make booking an appointment even faster!
      </h4>
      <h4>
        Already have an account?{" "}
        <Link to="/login" state={{ redirectURL: location.pathname }}>
          Login!
        </Link>
      </h4>
    </FormStep>
  );
};

export default CustomerStep;
