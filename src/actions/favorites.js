import { TOGGLE_FAVORITE,
  CLEAR_FAVORITES,
  SET_NOTIFY_BEFORE_FAVORITE_START,
  ADD_SCHEDULED_NOTIFICATION,
  REMOVE_SCHEDULED_NOTIFICATION,
  CLEAR_SCHEDULED_NOTIFICATIONS } from './actionTypes';

function toggleFavorite(eventID) {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      eventID,
    },
  };
}

function clearFavorites() {
  return {
    type: CLEAR_FAVORITES,
  };
}

export function toggleFavoriteEvent(event) {
  return (dispatch) => {
    dispatch(toggleFavorite(event._id));
  };
}

export function clearFavoriteEvents() {
  return (dispatch) => {
    dispatch(clearFavorites());
  };
}

export function setNotifyBeforeFavoriteStart(set) {
  return (dispatch) => {
    dispatch({
      type: SET_NOTIFY_BEFORE_FAVORITE_START,
      payload: {
        notifyBeforeFavoriteStart: set,
      },
    });
  };
}

export function addScheduledNotification(notification) {
  return (dispatch) => {
    dispatch({
      type: ADD_SCHEDULED_NOTIFICATION,
      payload: {
        notification,
      },
    });
  };
}

export function removeScheduledNotification(notification) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SCHEDULED_NOTIFICATION,
      payload: {
        notification,
      },
    });
  };
}

export function clearScheduledNotifications() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SCHEDULED_NOTIFICATIONS,
      payload: {},
    });
  };
}
