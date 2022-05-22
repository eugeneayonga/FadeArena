import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useGlobalContext();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        console.log(`res`, res);
        res.json();
      })
      .then((user) => {
        setCurrentUser(user);
      });
  };
  return (
    <div className="login-container">
      <div className="form-container">
        <h3>Please, Login!</h3>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
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
