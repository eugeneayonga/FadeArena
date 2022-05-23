import HeaderLogoSVG from "./HeaderLogoSVG";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { currentUser } = useGlobalContext();
  return (
    <header>
      <HeaderLogoSVG />
      <span className="links">
        <a href="/about">ABOUT</a>
        <Link to="/appointments">BOOK APPOINTMENT</Link>
        {!currentUser ? (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">SIGNUP</Link>
          </>
        ) : (
          <Link to="/logout">LOGOUT</Link>
        )}
        <ShoppingCartOutlinedIcon fontSize="large" className="cart-icon" />
      </span>
    </header>
  );
};

export default Header;
