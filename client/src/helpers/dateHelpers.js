const dateToYYYYMMDD = (date, options = {}) => {
  const delimiter = options.delimiter || "-";
  const year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  console.log(month);
  if (`${month}`.length === 1) {
    month = `0${month}`;
  }
  let day = date.getUTCDate();
  if (day.length === 1) day = `0${day}`;
  return `${year}${delimiter}${month}${delimiter}${day}`;
};

export { dateToYYYYMMDD };
