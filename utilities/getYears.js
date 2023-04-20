import { currentYear } from './constants.js';

const getYears = (startMonth, endMonth) => {
  if (startMonth > endMonth) {
    return { startYear: currentYear - 1, endYear: currentYear };
  }

  return { startYear: currentYear, endYear: currentYear };
};

export default getYears;
