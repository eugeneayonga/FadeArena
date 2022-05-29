import { useEffect, useRef, useState } from "react";
import { DateRangePicker, Calendar } from "react-date-range";

import "./dateTimeStep.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import TimePicker from "../../../../components/TimePicker/TimePicker";
import FormStep from "../../../../components/FormStep/FormStep";

const DateTimeStep = ({ availableTimeSlots, formData }) => {
  const [date, setDate] = useState(formData.current.dateTime?.date || "");
  const [time, setTime] = useState(formData.current.dateTime?.time || null);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    formData.current.dateTime.date = e.target.value;
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    formData.current.dateTime.time = e.target.value;
  };

  useEffect(() => {
    formData.current.dateTime ||= {};
  }, [formData]);

  return (
    <FormStep>
      <input type="date" value={date} onChange={handleDateChange} />
      <select name="hour" id="hour" value={time} onChange={handleTimeChange}>
        <option value={null} label="Choose a time"></option>
        {availableTimeSlots.map((ts) => {
          return (
            <option key={ts} value={ts}>
              {ts}
            </option>
          );
        })}
      </select>
    </FormStep>
  );
};

export default DateTimeStep;
