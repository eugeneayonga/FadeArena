import { useGlobalContext } from "../../context/GlobalContext";
import "./bookingFormModal.css";
import { useState } from "react";

const BookingFormModal = ({ isOpen, setOpenBookingModal }) => {
  const { services, barbers } = useGlobalContext();

  console.log(`services`, services);
  console.log(`barbers`, barbers);

  return (
    <dialog
      open={isOpen || false}
      id="booking-form-modal"
      className="modal booking-form-modal"
    ></dialog>
  );
};

export default BookingFormModal;
