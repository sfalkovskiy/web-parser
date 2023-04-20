import { HEADING_ITEMS } from './constants.js';
import getCompleteDates from './getCompleteDates.js';

const writeData = (tourData) => {
  const tourDates = tourData.map((tour) => getCompleteDates(tour.dates));

  const recordData = tourData.map((tour, index) => ({
    index: tour.index,
    title: tour.title,
    description: tour.description,
    dates: tourDates[index],
    price: tour.price,
    availability: tour.availability,
  }));

  return [
    HEADING_ITEMS,
    ...recordData.map((tour) => Object.values(tour)
      .map((tourItem) => (Array.isArray(tourItem) ? tourItem.join() : tourItem))),
  ];
};

export default writeData;
