import * as types from '../actions/actionTypes';
import {sortByDate} from '../utilities';

const initialState = {
  allEvents: [],
  eventsLoading: false,
  eventsLoadingFailed: false,
};

export default function events(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENT_FETCH_SUCCESS:
      return Object.assign({}, state, {
        eventsLoading: false,
        eventsLoadingFailed: false,
        allEvents: action.payload.events.sort(sortByDate),
      });
    default:
      return state;
  }
}
