'use strict';

import {sortByDate} from './utilities';

var EventMixin = {
  getInitialState() {
    return {
      events: []
    };
  },

  componentDidMount() {
    this.fetchEvents();
  },

  fetchEvents() {
    fetch('http://barteguiden.no/api/events')
      .then((response) => response.json())
      .then((responseData) => responseData.sort(sortByDate))
      .then((events) => {
        this.setState({
          events: events
        });
      })
      .done();
  }
};

export default EventMixin;
