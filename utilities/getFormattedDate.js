import { FORMAT_DATE } from './constants.js';

const getFormattedDate = (startDay, endDay, startMonth, endMonth, startYear, endYear) => {
  const formattedStartDate = `${startDay < 10
    ? FORMAT_DATE.ZERO
    : FORMAT_DATE.NOTHING}${startDay}.${startMonth < 10
    ? FORMAT_DATE.ZERO
    : FORMAT_DATE.NOTHING}${startMonth}.${startYear}`;

  const formattedEndDate = `${endDay < 10
    ? FORMAT_DATE.ZERO
    : FORMAT_DATE.NOTHING}${endDay}.${endMonth < 10
    ? FORMAT_DATE.ZERO
    : FORMAT_DATE.NOTHING}${endMonth}.${endYear}`;

  return { formattedStartDate, formattedEndDate };
};

export default getFormattedDate;
