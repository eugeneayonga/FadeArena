import "./login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

// const loginUser = async (user) => {
//   const config = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   };
//   try {
//     const user = await (await fetch("/login", config)).json();
//     return user;
//   } catch (err) {
//     console.error(err);
//   }
// };

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userActions = useUser();

  useEffect(() => {
    if (userActions.currentUser) navigate("/");
  });

  const handleLogin = (e) => {
    e.preventDefault();
    userActions.login({ email, password });
    // loginUser({ email, password }).then(setCurrentUser).catch(console.error);
  };

  // currentUser && console.log(currentUser);

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
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
