import { useEffect, useState } from "react";
import "./userProfile.css";

const UserProfile = () => {
  const [appointments, setAppointments] = useState(null);

  const UserAppointment = ({ appointment }) => {
    return (
      <li>{`${new Date(
        appointment.appointment_date
      ).toDateString()} at ${new Date(
        appointment.appointment_date
      ).toTimeString()} with ${appointment.barber.first_name} ${
        appointment.barber.last_name
      }`}</li>
    );
  };

  useEffect(() => {
    fetch("/user")
      .then((res) => {
        if (!res.ok) throw new Error(res.error);
        return res.json();
      })
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div className="user-profile">
      {appointments ? (
        <ul className="appointments">
          {appointments.map((apt) => (
            <UserAppointment appointment={apt}></UserAppointment>
          ))}
        </ul>
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
};

export default UserProfile;
