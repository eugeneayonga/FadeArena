import "./login.css";

const Login = () => {
  const handleLogin = () => {};
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </form>
    </div>
  );
};

export default Login;
