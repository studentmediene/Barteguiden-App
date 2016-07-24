import * as types from './actionTypes';

function eventFetchSuccess(events) {
  return {
    type: types.EVENT_FETCH_SUCCESS,
    payload: {
      events: events,
    }
  };
}

export function fetchEvents() {
  return dispatch => {
    return fetch('http://barteguiden.no/api/events', {
      method: 'get',
    })
    .then(response => response.json())
    .then(json => {
      return dispatch(eventFetchSuccess(json));
    })
    .catch(error => {
      console.log(error);
    })
    .done()
  }
}
