'use strict';
import moment from 'moment';
import 'moment/locale/nb';

export function sortByDate (event1, event2) {
  return new Date(event1.startAt).getTime() - new Date(event2.startAt).getTime();
}

export function formatDate (date) {
    return moment(new Date(date)).calendar(null, {
        sameDay: '[I dag]',
        nextDay: '[I morgen]',
        nextWeek: 'dddd Do MMMM YYYY',
        lastDay: 'dddd Do MMMM YYYY',
        lastWeek: 'dddd Do MMMM YYYY',
        sameElse: 'dddd Do MMMM YYYY'
    });
}

export function getTimeFromDate(date) {
  return moment(date).format('HH:mm');
}

export function formatPrice(price) {
  return !price ? 'Gratis' : 'Fra ' + price + ' kr';
}


