import { useLocation, useNavigate } from "react-router-dom";
import LogoSVG from "../../LogoSVG";
import "./banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="banner-container">
      <LogoSVG />
      {location.state?.appointment_date ? (
        <div className="appointment-booked message-container">
          <h4>Your appointment has been booked for: </h4>
          <h2>{location.state.appointment_date.toString()}</h2>
        </div>
      ) : (
        <div className="welcome message-container">
          <p className="welcome-header">Welcome!</p>
          <p className="welcome-message">
            Click below to book your next appointment!
          </p>
          <button
            className="book-appointment"
            onClick={() => navigate("/appointments")}
          >
            Book Appointment!
          </button>
        </div>
      )}
    </section>
  );
};

export default Banner;
