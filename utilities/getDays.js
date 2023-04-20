import { currentYear } from './constants.js';

const getDays = (defaultDate, endMonth) => {
  const startDay = parseInt(defaultDate[0], 10);
  const endDay = parseInt(defaultDate[1], 10);

  if (!Number.isNaN(startDay) && !Number.isNaN(endDay)) return { startDay, endDay };

  const daysInMonth = new Date(currentYear, endMonth, 0).getDate();

  return { startDay: 1, endDay: daysInMonth };
};

export default getDays;
