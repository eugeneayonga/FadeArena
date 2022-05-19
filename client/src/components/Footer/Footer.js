import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

import { ReactComponent as PsbLogo } from "../../assets/images/psb-logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-1">
        <PsbLogo width="100" height="100" />
        <span className="social-media-icons">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <EmailIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </span>
        Copyright © 2022 <br />
      </div>
    </div>
  );
};

export default Footer;
