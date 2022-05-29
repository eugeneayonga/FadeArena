import "./login.css";
import { useRef, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import TextField from "../../components/TextField/TextField";

const Login = () => {
  const formData = useRef({});

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = useCallback(() => {
    const url = location.state?.redirectURL || "/";
    navigate(url);
  }, [location.state, navigate]);

  const { state, actions } = useUser();

  useEffect(() => {
    if (state.currentUser) redirect();
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData.current;
    console.log(email, password);
    actions.login({ email, password });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h3>Please, Login!</h3>
        <form onSubmit={handleLogin}>
          <TextField
            formData={formData}
            id="email"
            label="Email"
            type="email"
            required
          />
          <TextField
            formData={formData}
            id="password"
            label="Password"
            type="password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
