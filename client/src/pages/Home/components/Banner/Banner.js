import { useNavigate } from "react-router-dom";
import LogoSVG from "../../LogoSVG";
import "./banner.css";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner-container">
      <LogoSVG />
      <div className="welcome">
        <p className="welcome-header">Welcome!</p>
        <p className="welcome-message">
          Click below to book your appointment today!
        </p>
        <button
          className="book-appointment"
          onClick={() => navigate("/appointments")}
        >
          Book Appointment!
        </button>
      </div>
    </section>
  );
};

export default Banner;
