import * as types from './actionTypes';
import FavoriteStore from '../FavoriteStore';

function eventFetchRequest() {
  return {
    type: types.EVENT_FETCH_REQUEST,
  };
}

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
    dispatch(eventFetchRequest());
    fetch('http://barteguiden.no/api/events', {
      method: 'get',
    })
    .then(response => response.json())
    .then(json => {
      const events = json.map(event => {
        const e = event;
        e.isFavorite = FavoriteStore.isFavorite(event._id);
        return e;
      });
      return dispatch(eventFetchSuccess(events));
    })
    .done();
  };
}