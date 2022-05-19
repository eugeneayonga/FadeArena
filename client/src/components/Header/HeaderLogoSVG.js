import { useNavigate } from "react-router-dom";
import { ReactComponent as PsbLogo } from "../../assets/images/psb-logo.svg";
import { ReactComponent as PsbText } from "../../assets/images/psb-text.svg";
import "./header.css";

const HeaderLogoSVG = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header-logo" onClick={() => navigate("/")}>
      <PsbLogo className="logo" height="50" width="50"></PsbLogo>
      <PsbText className="text" height="50" width="150"></PsbText>
    </div>
  );
};

export default HeaderLogoSVG;
