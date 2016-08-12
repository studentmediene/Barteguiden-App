import React from 'react-native';
import _ from 'lodash';

const STORAGE_KEY = '@AsyncStorage:Favorites';

const {
  AsyncStorage,
  } = React;

class FavoriteStore {
  constructor() {
    this.state = { favorites: [] };
  }

  async init() {
    this.state = { favorites: await this._getInitialState() };
  }

  async _getInitialState() {
    const favorites = await AsyncStorage.getItem(STORAGE_KEY);
    if (favorites != null) {
      return await JSON.parse(favorites);
    }
    return await [];
  }

  toggleFavorite(id) {
    if (this.isFavorite(id)) {
      this.removeFavorite(id);
    } else {
      this.addFavorite(id);
    }
  }

  removeFavorite(id) {
    this._setFavorites(_.without(this.state.favorites, id));
  }

  addFavorite(id) {
    this._setFavorites(_.union(this.state.favorites, [id]));
  }

  clearFavorites() {
    this.state = { favorites: [] };
    AsyncStorage.removeItem(STORAGE_KEY);
  }

  async _setFavorites(favorites) {
    this.state = { favorites };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }

  isFavorite(id) {
    return _.indexOf(this.state.favorites, id) !== -1;
  }
}

// Make FavoriteStore work like a singleton
let favStore; // eslint-disable-line
if (!favStore) {
  favStore = new FavoriteStore();
  favStore.init();
}

export default favStore;
