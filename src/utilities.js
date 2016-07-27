'use strict';
import moment from 'moment';
import 'moment/locale/nb';
import {Platform} from 'react-native';

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

export function categoryToImage(category) {
  if (category) {
    var prefix = category.charAt(0);
    var suffix = category.substr(1).toLowerCase();
    return 'category' + prefix + suffix;
  }
  return 'categoryOther';
}

export function getPlatformIcon(iconName) {
  const platformIcons = {
    'calendar': {
      'ios': 'ios-calendar-outline',
      'android' : 'ios-calendar'
    },
    'share': {
      'ios' : 'ios-share-outline',
      'android' : 'ios-share'
    },
    'map': {
      'ios' : 'ios-navigate-outline',
      'android' : 'ios-navigate'
    }
  };

  return platformIcons[iconName][Platform.OS];
}
