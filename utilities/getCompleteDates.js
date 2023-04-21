import chooseSplit from './chooseSplit.js';

const getComleteDates = (dates) => dates.map((date) => {
  const lowerCaseDates = date.toLowerCase();
  return chooseSplit(lowerCaseDates);
});

export default getComleteDates;
