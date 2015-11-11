'use strict';

export function sortByDate (event1, event2) {
  return new Date(event1.startAt).getTime() - new Date(event2.startAt).getTime();
};
