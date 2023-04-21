import getDates from './getDates.js';
import getFormattedDate from './getFormattedDate.js';
import { SPLIT_SIGNS, currentYear } from './constants.js';

const chooseSplit = (dates) => {
  let splitDates;

  if (dates.includes(SPLIT_SIGNS.ARROW)) {
    splitDates = dates.split(SPLIT_SIGNS.ARROW);

    return getDates(splitDates);
  } if (dates.includes(SPLIT_SIGNS.AND)) {
    splitDates = dates.split(SPLIT_SIGNS.AND);

    return getDates(splitDates);
  } if (dates.includes(SPLIT_SIGNS.TO)) {
    splitDates = dates.split(SPLIT_SIGNS.TO);

    return getDates(splitDates, false);
  } if (dates.includes(SPLIT_SIGNS.YEAR)) {
    const { formattedStartDate, formattedEndDate } = getFormattedDate(
      1,
      31,
      1,
      12,
      currentYear,
      currentYear,
    );

    return ` ${formattedStartDate} - ${formattedEndDate}`;
  }

  splitDates = [dates, dates];

  return getDates(splitDates);
};

export default chooseSplit;
