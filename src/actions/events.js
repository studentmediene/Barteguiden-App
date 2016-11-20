import * as types from './actionTypes';

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

function eventFetchFailure(error) {
  return {
    type: types.EVENT_FETCH_FAILURE,
    payload: {
      error,
    },
  };
}

export function fetchEvents() {
  return (dispatch) => {
    dispatch(eventFetchRequest());
    fetch('https://barteguiden.no/api/events', {
      method: 'get',
    })
    .then(response => response.json())

    .then((json) => {
      dispatch(eventFetchSuccess(json));
    })
    .catch((error) => {
      dispatch(eventFetchFailure(error));
    })
    .done();
  };
}

export function filterEvents(categories) {
  return {
    type: types.FILTER_EVENTS,
    payload: {
      categories,
    },
  };
}
