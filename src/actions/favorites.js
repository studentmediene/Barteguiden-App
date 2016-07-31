import {TOGGLE_FAVORITE} from './actionTypes';
import FavoriteStore from '../FavoriteStore';

function toggleFavorite(eventID) {
  return {
    type: TOGGLE_FAVORITE,
    payload: {
      eventID: eventID,
    }
  }
}

export function toggleFavoriteEvent(event) {
  return dispatch => {
    FavoriteStore.toggleFavorite(event._id);
    dispatch(toggleFavorite(event._id));
  }
}
