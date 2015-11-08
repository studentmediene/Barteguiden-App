/**
 * Barteguiden App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} = React;

var EventList = require('./src/EventList');

var BarteguidenApp = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'all'
    };
  },

  _renderEvents: function(pageText: string) {
    return (
      <EventList showOnlyUserFavorites={false}/>
    );
  },

  _renderContent: function(pageText: string) {
    return (
      <View style={styles.container}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  },


  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Alle"
          systemIcon="history"
          selected={this.state.selectedTab === 'all'}
          onPress={() => {
            this.setState({
              selectedTab: 'all',
            });
          }}>
          {this._renderEvents('Alle')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Favoritter"
          systemIcon="favorites"
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
          systemIcon="contacts"
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
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('BarteguidenApp', () => BarteguidenApp);
