import { TOGGLE_FAVORITE, CLEAR_FAVORITES } from './actionTypes';

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
