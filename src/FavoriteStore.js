'use strict';

import React from 'react-native';
import _ from 'lodash';

const STORAGE_KEY = "@AsyncStorage:Favorites";

const {
  AsyncStorage,
  } = React;

class FavoriteStore {
  constructor() {
    this.state = {favorites: []};
  }

  async init() {
    this.state = {favorites: await this._getInitialState()};
  }

  async _getInitialState() {
    try {
      let favorites = await AsyncStorage.getItem(STORAGE_KEY);
      if (favorites != null) {
        return await JSON.parse(favorites);
      }
    }
    catch (error) {
    }
    return await [];
  }

  toggleFavorite(id) {
    this.isFavorite(id) ? this.removeFavorite(id) : this.addFavorite(id);
  }

  removeFavorite(id) {
    this._setFavorites(_.without(this.state.favorites, id))
  }

  addFavorite(id) {
    this._setFavorites(_.union(this.state.favorites, [id]))
  }

  async _setFavorites(favorites) {
    try {
      this.state = {favorites: favorites};
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  isFavorite(id) {
    return _.indexOf(this.state.favorites, id) != -1;
  }
}

// Make FavoriteStore work like a singleton
let favStore;
if (!favStore) {
  favStore = new FavoriteStore();
  favStore.init();
}

export default favStore;
