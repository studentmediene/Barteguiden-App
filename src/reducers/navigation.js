import { cardStackReducer, tabReducer } from 'react-native-navigation-redux-helpers';
import views from '../views/index';
import routes from '../routes';

const cardStackInitial = {
  key: 'cardstack',
  index: 0,
  routes: [
    routes[0],
  ],
};

const tabs = {
  routes: views,
  key: 'tabs',
  index: 0,
};

export const tabNavigation = tabReducer(tabs);
export const cardStackNavigation = cardStackReducer(cardStackInitial);
