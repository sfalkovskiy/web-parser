import getDates from './getDates.js';

const getComleteDates = (dates) => {
  const datesLowerCase = dates.map((date) => date.toLowerCase());

  return datesLowerCase.map((date) => getDates(date));
};

export default getComleteDates;
