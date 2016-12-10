import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import routes from '../routes';

const { jumpTo, pushRoute, popRoute } = navigationActions;

export function jumpToTab(tabIndex, tabNavigationKey) {
  return (dispatch) => {
    dispatch(jumpTo(tabIndex, tabNavigationKey));
  };
}

export function pushNavRoute(routeIndex, cardStackNavKey, routeProps) {
  return (dispatch) => {
    dispatch(pushRoute(Object.assign({}, routes[routeIndex], routeProps), cardStackNavKey));
  };
}

export function popNavRoute(cardStackNavKey) {
  return (dispatch) => {
    dispatch(popRoute(cardStackNavKey));
  };
}
