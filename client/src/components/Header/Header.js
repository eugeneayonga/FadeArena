import HeaderLogoSVG from "./HeaderLogoSVG";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <HeaderLogoSVG />
      <span className="links">
        <a href="#">ABOUT</a>
        <Link to="/appointments">BOOK APPOINTMENT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
        <ShoppingCartOutlinedIcon fontSize="large" className="cart-icon" />
      </span>
    </header>
  );
};

export default Header;
