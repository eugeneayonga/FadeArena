import HeaderLogoSVG from "./HeaderLogoSVG";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = ({ currentUser, logout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  currentUser && console.log(currentUser);
  return (
    <header>
      <HeaderLogoSVG />
      <Link className="book-appointment" to="/appointments">
        BOOK APPOINTMENT
      </Link>
      <span className="login-logout">
        {currentUser === null ? (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGNUP</Link>
          </>
        ) : (
          <>
            <Link to="/logout" onClick={handleLogout}>
              LOGOUT
            </Link>
            <p>Hello, </p>
          </>
        )}
      </span>
    </header>
  );
};

export default Header;
