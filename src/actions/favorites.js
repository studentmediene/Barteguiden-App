import { TOGGLE_FAVORITE, CLEAR_FAVORITES } from './actionTypes';
import FavoriteStore from '../FavoriteStore';

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
  return dispatch => {
    FavoriteStore.toggleFavorite(event._id);
    dispatch(toggleFavorite(event._id));
  };
}

export function clearFavoriteEvents() {
  return dispatch => {
    FavoriteStore.clearFavorites();
    dispatch(clearFavorites());
  };
}
