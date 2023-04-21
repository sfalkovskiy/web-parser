import { FORMAT_DATE } from './constants.js';

const getFormatItem = (item) => {
  const formattedItem = item < 10
    ? FORMAT_DATE.ZERO
    : FORMAT_DATE.NOTHING;
  return `${formattedItem}${item}`;
};
export default getFormatItem;
