import * as types from './actionTypes';
import FavoriteStore from '../FavoriteStore';

function eventFetchSuccess(events) {
  return {
    type: types.EVENT_FETCH_SUCCESS,
    payload: {
      events,
    },
  };
}

export function fetchEvents() {
  return dispatch => {
    return fetch('http://barteguiden.no/api/events', {
      method: 'get',
    })
    .then(response => response.json())
    .then(json => {
      let events = json.map((event) => {
        event.isFavorite = FavoriteStore.isFavorite(event._id);
        return event;
      });
      return dispatch(eventFetchSuccess(json));
    })
    .catch(error => {
      console.log(error);
    })
    .done();
  };
}
