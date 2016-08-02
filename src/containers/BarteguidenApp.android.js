import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as eventActions from '../actions/events';
import Home from '../views/Home';
import AllEvents from '../views/AllEvents';
import FavoriteEvents from '../views/FavoriteEvents';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { topColor, highlightColor } from '../colors';

import {
  ToolbarAndroid,
  StyleSheet,
  View,
} from 'react-native';


class BarteguidenApp extends Component {
  async componentDidMount() {
    this.props.actions.fetchEvents();
  }

  onActionSelected(position) {
    if (position === 0) { // index of 'Settings'
    }
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <ToolbarAndroid
          style={styles.toolbar}
          title='Barteguiden'
          onIconClicked={() => this.props.navigator.pop()}
          actions={[{ title: 'Innstillinger', show: 'always' }]}
          onActionSelected={this.onActionSelected}
        />

        <ScrollableTabView
          tabBarUnderlineColor={highlightColor}
          tabBarBackgroundColor={topColor}
          tabBarActiveTextColor={highlightColor}
        >
          <Home events={this.props.events} title='Home' tabLabel='Hva skjer?' />
          <AllEvents events={this.props.events} title='All' tabLabel='Alle' />
          <FavoriteEvents events={this.props.events} title='Favorites' tabLabel='Favoritter' />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: topColor,
    height: 56,
  },
});

const mapStateToProps = state => ({
  events: state.events.allEvents,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarteguidenApp);
