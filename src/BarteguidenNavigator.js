'use strict';

import React from 'react-native';

const {
  Navigator,
  StyleSheet,
  Text,
  View,
  cloneElement,
  Children,
  TouchableOpacity,
} = React;


const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    let previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
      </Text>
    );
  }

};

const EventDetails = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.event.title}</Text>
      </View>
    );
  }
})

const BarteguidenNavigator = React.createClass({
  render() {
    return (
      <Navigator
        sceneStyle={{paddingTop: 60}}
        initialRoute={{id: 0, title: this.props.title}}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />
    );
  },

  _renderScene(route, navigator) {
    let children = Children.map(this.props.children, (element) =>
      cloneElement(element, {navigator: navigator})
    );
    switch(route.id) {
      case 0:
        return <View style={styles.container}>{children}</View>
      case 1:
        return (
          <View style={styles.container}>
            <EventDetails event={route.event} navigator={navigator}/>
          </View>
        );
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'black',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarButtonText: {
    color: 'black'
  },
});

export default BarteguidenNavigator;
