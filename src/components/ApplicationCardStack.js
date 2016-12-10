import React, { Component } from 'react';

import { topColor } from '../colors';
import globalRoutes from '../routes';
import EventDetails from './EventDetails';
import Settings from '../views/Settings';

import Icon from 'react-native-vector-icons/Ionicons';
import { actions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';

import ApplicationTabs from './ApplicationTabs';

import {
  NavigationExperimental,
  TouchableOpacity,
  Platform,
  BackAndroid,
  StyleSheet,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental;

const {
  popRoute,
  pushRoute,
} = actions;

class ApplicationCardStack extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.cardStackNavigation.routes.length > 1) {
        dispatch(popRoute(this.props.cardStackNavigation.key));
        return true;
      }
      return false;
    });
  }

  _renderHeader = props => (
    <NavigationHeader
      {...props}
      style={styles.navBar}
      renderTitleComponent={this._renderHeaderTitle}
      renderRightComponent={this._renderHeaderRightComponent}
      onNavigateBack={() => this.props.dispatch(popRoute(this.props.cardStackNavigation.key))}
    />
  )

  _renderHeaderTitle = (props) => {
    // If CardStack route title is not defined, use tab title.
    const title = props.scene.route.title ?
    props.scene.route.title : this.props.tabNavigation.routes[this.props.tabNavigation.index].title;
    if (title) {
      return (
        <NavigationHeader.Title>
          {title}
        </NavigationHeader.Title>
      );
    }
    return null;
  }

  _renderHeaderRightComponent = () => {
    const { dispatch } = this.props;
    if (Platform.OS === 'android') {
      return (
        <TouchableOpacity
          onPress={() => dispatch(pushRoute(globalRoutes[2], 'cardstack'))}
          style={styles.settingsIcon}
        >
          <Icon name='md-settings' size={30} color='black' />
        </TouchableOpacity>
      );
    }
    return null;
  }

  _renderScene = (props) => {
    if (props.scene.route.key === 'eventDetails') {
      return <EventDetails eventID={props.scene.route.event._id} />;
    }
    if (props.scene.route.key === 'settingsViewAndroid') {
      return <Settings />;
    }
    if (Platform.OS === 'android') {
      return <ApplicationTabs />;
    }
    const RouteComponent = this.props.tabComponent;
    return <RouteComponent events={this.props.events} />;
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.cardStackNavigation}
        renderHeader={this._renderHeader}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: topColor,
    elevation: 0,
  },
  settingsIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

function mapStateToProps(state) {
  return {
    cardStackNavigation: state.cardStackNavigation,
    tabNavigation: state.tabNavigation,
  };
}

export default connect(mapStateToProps)(ApplicationCardStack);
