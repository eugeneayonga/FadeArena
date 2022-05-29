import HeaderLogoSVG from "./HeaderLogoSVG";
import { Link, useLocation } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const location = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <header>
      <HeaderLogoSVG />
      <Link className="book-appointment" to="/appointments">
        BOOK APPOINTMENT
      </Link>
      <span className="login-logout">
        {currentUser === null ? (
          <>
            <Link to="/login" state={{ redirectURL: location.pathname }}>
              LOGIN
            </Link>
            <Link to="/signup">SIGNUP</Link>
          </>
        ) : (
          <>
            <p>
              Welcome,{" "}
              <Link className="user-link" to={`/user/${currentUser.id}`}>
                {currentUser.client.first_name}
              </Link>
            </p>
            <Link to="/logout" onClick={handleLogout}>
              LOGOUT
            </Link>
          </>
        )}
      </span>
    </header>
  );
};

export default Header;
