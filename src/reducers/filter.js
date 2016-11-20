import * as types from '../actions/actionTypes';

const initialState = {
  filteredCategories: [],
};

export default function events(state = initialState, action = {}) {
  switch (action.type) {
    case types.FILTER_EVENTS:
      return Object.assign({}, state, {
        filteredCategories: action.payload.categories,
      });
    default:
      return state;
  }
}
