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
        <a href="#">SERVICES</a>
        <a href="#">SHOP</a>
        <Link to="/appointments">BOOK APPOINTMENT</Link>
        <Link to="/login">LOGIN</Link>
        <ShoppingCartOutlinedIcon fontSize="large" className="cart-icon" />
      </span>
    </header>
  );
};

export default Header;
