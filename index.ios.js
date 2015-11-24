/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native'
import EventList from './src/EventList';
import EventStore from './src/EventStore';
import PromotedEventSwiper from './src/PromotedEventSwiper';
import BarteguidenNavigator from './src/BarteguidenNavigator';
import _ from 'lodash';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Component,
} = React;


class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.header}</Text>
      </View>
    );
  }
}

class BarteguidenApp extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'whatisup',
      events: []
    };
  }

  async componentDidMount() {
    let events = await EventStore.fetchEvents();
    this.setState({events});
  }

  _renderAll() {
    return (
      <BarteguidenNavigator title={'Alle'}>
        <EventList events={this.state.events}/>
      </BarteguidenNavigator>
    );
  }

  _renderContent(pageText) {
    return (
      <View style={styles.container}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  }

  _renderWhatIsUp() {
    return (
      <BarteguidenNavigator title={'Hva skjer?'}>
        <PromotedEventSwiper events={this.state.events}/>
        <EventList events={_.take(this.state.events, 10)}/>
      </BarteguidenNavigator>
    );
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Hva skjer"
          icon={{ uri: "all", isStatic: true }}
          selected={this.state.selectedTab === 'whatisup'}
          onPress={() => {
            this.setState({
              selectedTab: 'whatisup',
            });
          }}>
          {this._renderWhatIsUp()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Alle"
          icon={{ uri: "all", isStatic: true }}
          selected={this.state.selectedTab === 'all'}
          onPress={() => {
            this.setState({
              selectedTab: 'all',
            });
          }}>
          {this._renderAll()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Favoritter"
          icon={{ uri: "favorites", isStatic: true }}
          selected={this.state.selectedTab === 'favorites'}
          onPress={() => {
            this.setState({
              selectedTab: 'favorites',
            });
          }}>
          {this._renderContent('Favoritter')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Innstillinger"
          icon={{ uri: "settings", isStatic: true }}
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          {this._renderContent('Innstillinger')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 25
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black'
  },
  tabText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('BarteguidenApp', () => BarteguidenApp);
