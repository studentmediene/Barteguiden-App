'use strict';

import {sortByDate} from './utilities';

const EventStore = {

  async fetchEvents() {
    let response = await fetch('http://barteguiden.no/api/events')
    let responseData = await response.json();
    return await responseData.sort(sortByDate);
  }
};

export default EventStore;
