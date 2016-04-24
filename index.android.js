/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';
import EventStore from './src/EventStore';
import PromotedEventSwiper from './src/components/PromotedEventSwiper';
import EventList from './src/components/EventList';
import {logoImage} from './src/constants';
import _ from 'lodash';
import Home from './src/views/Home';
import AllEvents from './src/views/AllEvents';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
} = React;


class BarteguidenApp extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };

  }

  async componentDidMount() {
    let events = await EventStore.fetchEvents();
    this.setState({events});
  }

  render() {
    return (
      <View
      style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="Barteguiden"
          logo={require('./src/img/Icon.png')}
          onIconClicked={() => this.props.navigator.pop()}
          actions={[{title: 'Innstillinger', show: 'always'}]}
          onActionSelected={this.onActionSelected} />

        <ScrollableTabView>
          <Home events={this.state.events} title="Home" tabLabel="Hva skjer?"/>
          <AllEvents events={this.state.events} title="All" tabLabel="Alle"/>
        </ScrollableTabView>
      </View>
    );
  }



  onActionSelected(position) {

    if (position === 0) { // index of 'Settings'
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },

});

AppRegistry.registerComponent('BarteguidenApp', () => BarteguidenApp);
