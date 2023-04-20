import getFormattedDate from './getFormattedDate.js';
import getYears from './getYears.js';
import getMonths from './getMonths.js';
import getDays from './getDays.js';
import { currentYear, FORMAT_DATE, SPLIT_SIGNS } from './constants.js';

const getDates = (dates) => {
  let inclusive = true;
  let splitDates;

  if (dates.includes(SPLIT_SIGNS.ARROW)) {
    splitDates = dates.split(SPLIT_SIGNS.ARROW);
  } else if (dates.includes(SPLIT_SIGNS.AND)) {
    splitDates = dates.split(SPLIT_SIGNS.AND);
  } else if (dates.includes(SPLIT_SIGNS.TO)) {
    splitDates = dates.split(SPLIT_SIGNS.TO);
    inclusive = false;
  } else if (dates.includes(SPLIT_SIGNS.YEAR)) {
    const { formattedStartDate, formattedEndDate } = getFormattedDate(
      1,
      31,
      1,
      12,
      currentYear,
      currentYear,
    );

    return ` ${formattedStartDate} - ${formattedEndDate}`;
  } else {
    splitDates = [dates, dates];
  }

  const defaultDate = splitDates.map((date) => date.replace(/ /g, FORMAT_DATE.NOTHING).trim());

  const months = getMonths(defaultDate);

  const { startMonth } = months;
  const endMonth = inclusive ? months.endMonth : months.endMonth - 1;

  const { startDay, endDay } = getDays(defaultDate, endMonth);

  const { startYear, endYear } = getYears(startMonth, endMonth);

  const { formattedStartDate, formattedEndDate } = getFormattedDate(
    startDay,
    endDay,
    startMonth,
    endMonth,
    startYear,
    endYear,
  );

  return ` ${formattedStartDate} - ${formattedEndDate}`;
};

export default getDates;
