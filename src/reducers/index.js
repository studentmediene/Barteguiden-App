import { combineReducers } from 'redux';
import events from './events';
import filter from './filter';

const reducer = combineReducers({
  events,
  filter,
});

export default reducer;
