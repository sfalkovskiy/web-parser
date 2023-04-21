import getFormatItem from './getFormatItem.js';

const getFormattedDate = (startDay, endDay, startMonth, endMonth, startYear, endYear) => {
  const formattedStartDate = `${getFormatItem(startDay)}.${getFormatItem(startMonth)}.${startYear}`;
  const formattedEndDate = `${getFormatItem(endDay)}.${getFormatItem(endMonth)}.${endYear}`;

  return { formattedStartDate, formattedEndDate };
};

export default getFormattedDate;
