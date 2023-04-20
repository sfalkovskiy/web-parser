import { MONTHS } from './constants.js';

const getMonths = (defaultDate) => {
  let startMonth = 0;
  let endMonth = 0;

  Object.keys(MONTHS).forEach((key) => {
    if (defaultDate[1].includes(key)) endMonth = MONTHS[key];
    if (defaultDate[0].includes(key)) startMonth = MONTHS[key];
  });

  startMonth = startMonth === 0 ? endMonth : startMonth;

  return { startMonth, endMonth };
};

export default getMonths;
