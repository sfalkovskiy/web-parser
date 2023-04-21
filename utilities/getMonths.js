import { MONTHS, MONTHS_KEYS } from './constants.js';

const getMonths = (defaultDate) => {
  const [startDate, endDate] = defaultDate;

  let startMonth = 0;
  let endMonth = 0;

  MONTHS_KEYS.forEach((key) => {
    if (endDate.includes(key)) endMonth = MONTHS[key];
    if (startDate.includes(key)) startMonth = MONTHS[key];
  });

  startMonth = startMonth === 0 ? endMonth : startMonth;

  return { startMonth, endMonth };
};

export default getMonths;
