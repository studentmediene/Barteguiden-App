import { combineReducers } from 'redux';
import events from './events';
import filter from './filter';
import { tabNavigation, cardStackNavigation } from './navigation';

const reducer = combineReducers({
  events,
  filter,
  tabNavigation,
  cardStackNavigation,
});

export default reducer;
