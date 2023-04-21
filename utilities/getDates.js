import getFormattedDate from './getFormattedDate.js';
import getYears from './getYears.js';
import getMonths from './getMonths.js';
import getDays from './getDays.js';
import { FORMAT_DATE } from './constants.js';

const getDates = (splitDates, inclusive = true) => {
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
