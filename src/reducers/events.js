import * as types from '../actions/actionTypes';
import { sortByDate } from '../utilities';
import _ from 'lodash';

const initialState = {
  allEvents: [],
  eventsLoading: false,
  eventsLoadingFailed: false,
  favoriteEvents: [],
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
        allEvents: action.payload.events.sort(sortByDate).map(
          (event) => {
            if (_.includes(state.favoriteEvents, event._id)) {
              return Object.assign({}, event, {
                isFavorite: true,
              });
            }
            return Object.assign({}, event, {
              isFavorite: false,
            });
          }
        ),
      });
    case types.EVENT_FETCH_FAILURE:
      return Object.assign({}, state, {
        eventsLoading: false,
        eventsLoadingFailed: true,
        allEvents: [],
      });
    case types.TOGGLE_FAVORITE:
      if (_.includes(state.favoriteEvents, action.payload.eventID)) {
        return Object.assign({}, state, {
          favoriteEvents: _.without(state.favoriteEvents, action.payload.eventID),
          allEvents: state.allEvents.map((event) => {
            if (event._id === action.payload.eventID) {
              return Object.assign({}, event, {
                isFavorite: !event.isFavorite,
              });
            }
            return event;
          }),
        });
      }
      return Object.assign({}, state, {
        favoriteEvents: _.concat(state.favoriteEvents, action.payload.eventID),
        allEvents: state.allEvents.map((event) => {
          if (event._id === action.payload.eventID) {
            return Object.assign({}, event, {
              isFavorite: !event.isFavorite,
            });
          }
          return event;
        }),
      });
    case types.CLEAR_FAVORITES:
      return Object.assign({}, state, {
        allEvents: state.allEvents.map(event => (
          Object.assign({}, event, {
            isFavorite: false,
          })
        )),
      }, {
        favoriteEvents: [],
      });
    default:
      return state;
  }
}
