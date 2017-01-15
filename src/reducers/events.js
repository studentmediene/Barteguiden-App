import * as types from '../actions/actionTypes';
import { sortByDate } from '../utilities';
import _ from 'lodash';

const initialState = {
  allEvents: [],
  eventsLoading: false,
  eventsLoadingFailed: false,
  favoriteEvents: [],
  settings: {
    notifyBeforeFavoriteStart: false,
  },
  scheduledNotifications: [],
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
    case types.SET_NOTIFY_BEFORE_FAVORITE_START:
      return Object.assign({}, state, {
        settings: Object.assign({}, state.settings, {
          notifyBeforeFavoriteStart: action.payload.notifyBeforeFavoriteStart,
        }),
      });
    case types.ADD_SCHEDULED_NOTIFICATION:
      return Object.assign({}, state, {
        scheduledNotifications: _.concat(state.scheduledNotifications, Object.assign({},
          action.payload.notification)),
      });
    case types.REMOVE_SCHEDULED_NOTIFICATION:
      return Object.assign({}, state, {
        scheduledNotifications: _.filter(state.scheduledNotifications,
          notification => notification.id !== action.payload.notification.id
        ),
      });
    case types.CLEAR_SCHEDULED_NOTIFICATIONS:
      return Object.assign({}, state, {
        scheduledNotifications: [],
      });
    default:
      return state;
  }
}
