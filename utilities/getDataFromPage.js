import {
  SELECTORS, SPLIT_SIGNS, AVAILABILITY, FORMAT_DATE,
} from './constants.js';

const getDataFromPage = (page) => page.evaluate((
  SELECTORS,
  SPLIT_SIGNS,
  AVAILABILITY,
  FORMAT_DATE,
) => {
  const tourCards = Array.from(document.querySelectorAll(SELECTORS.GENERAL));

  return tourCards.map((tour, index) => {
    const title = tour.querySelector(SELECTORS.TITLE)?.innerText;

    const priceText = tour.querySelector(SELECTORS.PRICE)?.innerText;
    const REGEX_NUMBERS_ONLY = /[^\d]/g;
    const replacedPrice = priceText.replace(REGEX_NUMBERS_ONLY, FORMAT_DATE.NOTHING);
    const price = replacedPrice || '-';

    const descriptionDate = tour.querySelector(SELECTORS.DESCRIPTION_DATE)?.innerText;
    const REGEX_TEXT_WRAP = /\n+/;
    const splitDescriptionDate = descriptionDate.split(REGEX_TEXT_WRAP);

    const description = splitDescriptionDate[0];
    const dates = splitDescriptionDate[1].split(SPLIT_SIGNS.COMMA);

    const availability = price === AVAILABILITY.EMPTY
      ? AVAILABILITY.NO_PLACE
      : AVAILABILITY.EMPTY;

    return {
      index: index + 1,
      title,
      description,
      dates,
      price,
      availability,
    };
  });
}, SELECTORS, SPLIT_SIGNS, AVAILABILITY, FORMAT_DATE);

export default getDataFromPage;
