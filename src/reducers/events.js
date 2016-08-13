import * as types from '../actions/actionTypes';
import { sortByDate } from '../utilities';

const initialState = {
  allEvents: [],
  eventsLoading: false,
  eventsLoadingFailed: false,
};

export default function events(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENT_FETCH_REQUEST:
      return Object.assign({}, state, {
        eventsLoading: true,
        eventsLoadingFailed: false,
      });
    case types.EVENT_FETCH_SUCCESS:
      return Object.assign({}, state, {
        eventsLoading: false,
        eventsLoadingFailed: false,
        allEvents: action.payload.events.sort(sortByDate),
      });
    case types.EVENT_FETCH_FAILURE:
      return Object.assign({}, state, {
        eventsLoading: false,
        eventsLoadingFailed: true,
        allEvents: [],
      });
    case types.TOGGLE_FAVORITE:
      return Object.assign({}, state, {
        allEvents: state.allEvents.map((event) => {
          if (event._id === action.payload.eventID) {
            return Object.assign({}, event, {
              isFavorite: !event.isFavorite,
            });
          }
          return event;
        }),
      });
    default:
      return state;
  }
}
