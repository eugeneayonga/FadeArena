const getHours = () => {
  const hours = [];
  for (let i = 0; i < 12; i++) {
    hours.push(i + 1);
  }
  return hours;
};

const TimePicker = ({ time, onTimeChange }) => {
  const hours = getHours();
  console.log(`hours`, hours);
  return (
    <div className="time-picker">
      <select name="hours" id="hours">
        {hours.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      <select name="minutes" id="minutes">
        <option value="00">00</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default TimePicker;
