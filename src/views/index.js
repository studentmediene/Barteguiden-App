'use strict';

import AllEvents from './AllEvents';
import FavoriteEvents from './FavoriteEvents';
import Home from './Home';
import Settings from './Settings';

export default [
  {
    id: 'home',
    title: 'Hva skjer?',
    component: Home,
    iconUri: 'all'
  },
  {
    id: 'all',
    title: 'Alle',
    component: AllEvents,
    iconUri: 'all'
  },
  {
    id: 'favorites',
    title: 'Favoritter',
    component: FavoriteEvents,
    iconUri: 'favorites'
  },
  {
    id: 'settings',
    title: 'Innstillinger',
    component: Settings,
    iconUri: 'settings'
  }
];
