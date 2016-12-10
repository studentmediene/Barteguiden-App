import { combineReducers } from 'redux';
import events from './events';
import { tabNavigation, cardStackNavigation } from './navigation';

const reducer = combineReducers({
  events,
  tabNavigation,
  cardStackNavigation,
});

export default reducer;
