import AllEvents from './AllEvents';
import FavoriteEvents from './FavoriteEvents';
import Home from './Home';
import Settings from './Settings';

export default [
  {
    key: 'home',
    title: 'Hva skjer?',
    component: Home,
    iconUri: 'all',
    isAndroidTab: true,
  },
  {
    key: 'all',
    title: 'Alle',
    component: AllEvents,
    iconUri: 'all',
    isAndroidTab: true,
  },
  {
    key: 'favorites',
    title: 'Favoritter',
    component: FavoriteEvents,
    iconUri: 'favorites',
    isAndroidTab: true,
  },
  {
    key: 'settings',
    title: 'Innstillinger',
    component: Settings,
    iconUri: 'settings',
    isAndroidTab: false,
  },
];
