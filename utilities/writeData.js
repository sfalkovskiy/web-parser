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

  const rows = [
    ...recordData.map((tour) => {
      const joinedItems = [];
      for (const key in tour) {
        if (Object.prototype.hasOwnProperty.call(tour, key)) {
          joinedItems.push(Array.isArray(tour[key]) ? tour[key].join() : tour[key]);
        }
      }
      return joinedItems;
    }),

  ];

  return [
    HEADING_ITEMS,
    ...rows,
  ];
};

export default writeData;
