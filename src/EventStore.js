'use strict';

import {sortByDate} from './utilities';

const EventStore = {

  fetchEvents() {
    return fetch('http://barteguiden.no/api/events')
      .then((response) => response.json())
      .then((responseData) => responseData.sort(sortByDate))
  }
};

export default EventStore;
