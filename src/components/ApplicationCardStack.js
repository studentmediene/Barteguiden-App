import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { topColor } from '../colors';
import { getPlatformIcon } from '../utilities';

import { popNavRoute, pushNavRoute } from '../actions/navigation';
import { filterEvents } from '../actions/events';

import EventDetails from './EventDetails';
import Settings from '../views/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import ApplicationTabs from './ApplicationTabs';
import Filter from '../components/Filter';

import {
  NavigationExperimental,
  TouchableOpacity,
  Platform,
  BackAndroid,
  StyleSheet,
  View,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental;

class ApplicationCardStack extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.cardStackNavigation.routes.length > 1) {
        dispatch(popNavRoute(this.props.cardStackNavigation.key));
        return true;
      }
      return false;
    });
  }

  _onFilterSubmit = (categoryCheck) => {
    this.props.dispatch(filterEvents(categoryCheck));
    this.props.dispatch(popNavRoute(this.props.cardStackNavigation.key));
  }

  _setModalVisible = () => {
    this.props.dispatch(pushNavRoute(3, 'cardstack'));
  }

  _renderHeader = props => (
    <NavigationHeader
      {...props}
      style={styles.navBar}
      renderTitleComponent={this._renderHeaderTitle}
      renderRightComponent={this._renderHeaderRightComponent}
      renderLeftComponent={this._renderHeaderLeftComponent}
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

  _renderHeaderLeftComponent = (props) => {
    const { dispatch } = this.props;
    if (props.scene.index !== 0) {
      return (
        <TouchableOpacity
          onPress={() => dispatch(popNavRoute('cardstack'))}
          style={styles.buttonContainer}
        >
          <Icon name={getPlatformIcon('arrowBack')} size={24} color='black' style={styles.navBarIcon} />
        </TouchableOpacity>
      );
    }
    return null;
  }

  _renderHeaderRightComponent = () => {
    const { dispatch } = this.props;
    if (Platform.OS === 'android') {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this._setModalVisible(true)}
            style={styles.buttonContainer}
          >
            <Icon name='md-funnel' size={30} color='black' style={styles.navBarIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(pushNavRoute(2, 'cardstack'))}
          >
            <Icon name='md-settings' size={30} color='black' style={styles.navBarIcon} />
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => this._setModalVisible(true)}
          style={styles.buttonContainer}
        >
          <Icon name='ios-funnel' size={30} color='black' style={styles.navBarIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  _renderScene = (props) => {
    if (props.scene.route.key === 'eventDetails') {
      return <EventDetails eventID={props.scene.route.event._id} />;
    }
    if (props.scene.route.key === 'settingsViewAndroid') {
      return <Settings />;
    }
    if (props.scene.route.key === 'filterView') {
      return (
        <Filter
          setModalVisible={this._setModalVisible}
          onFilterSubmit={this._onFilterSubmit}
        />
      );
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
        onNavigateBack={() => this.props.dispatch(popNavRoute('cardstack'))}
      />
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: topColor,
    elevation: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBarIcon: {
    margin: Platform.OS === 'ios' ? 10 : 16,
  },
});

function mapStateToProps(state) {
  return {
    cardStackNavigation: state.cardStackNavigation,
    tabNavigation: state.tabNavigation,
  };
}

export default connect(mapStateToProps)(ApplicationCardStack);
