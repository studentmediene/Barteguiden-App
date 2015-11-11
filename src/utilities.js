'use strict';
import moment from 'moment';

export function sortByDate (event1, event2) {
  return new Date(event1.startAt).getTime() - new Date(event2.startAt).getTime();
};

export function getTimeFromDate(date) {
  return moment(date).format('HH:mm');
};

export function formatPrice(price) {
  return !price ? 'Gratis' : 'Fra ' + price + ' kr';
}
