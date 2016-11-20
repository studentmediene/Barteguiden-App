import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCheckBox from '../components/ActionCheckBox';
import ActionButton from '../components/ActionButton';

import * as eventActions from '../actions/events';
import Home from '../views/Home';
import AllEvents from '../views/AllEvents';
import FavoriteEvents from '../views/FavoriteEvents';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { topColor, highlightColor, containerColor, backgroundIconButtonColor, iconColor } from '../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { categoryElements } from '../constants';
import { getPlatformIcon } from '../utilities';
import _ from 'lodash';

import {
  StyleSheet,
  View,
  Modal,
  Image,
} from 'react-native';


class BarteguidenApp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false, categoryCheck: [] };
    this.onFilterSubmit = this.onFilterSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchEvents();
  }

  onActionSelected = (position) => {
    if (position === 0) {
      this.setModalVisible(true);
    } else if (position === 1) {
      this.props.navigator.push({ id: 3 });
    }
  }

  onCategoryCheck(categoryName) {
    const temp = this.state.categoryCheck;
    if (this.state.categoryCheck.includes(categoryName)) {
      temp.splice(temp.indexOf(categoryName), 1);
    }
    else {
      temp.push(categoryName);
    }
    this.setState({ categoryCheck: temp });
  }

  onFilterSubmit() {
    this.props.actions.filterEvents(this.state.categoryCheck);
    this.setState({ modalVisible: false });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const categories = categoryElements.map((obj) => {
      return (
        <View key={obj.name} style={{ flexDirection: 'row' }}>
          <ActionCheckBox
            actionText={obj.name}
            checked={this.state.categoryCheck.includes(obj.id)}
            onChange={() => this.onCategoryCheck(obj.id)}
            checkedImage={getPlatformIcon('checkedBox')}
            iconColor={highlightColor}
            backgroundColor={containerColor}
            uncheckedImage={getPlatformIcon('uncheckedBox')}
          />
          <Image source={obj.imgUrl} />
        </View>
        );
    });

    const filteredEvents =  _.filter(this.props.events, (event) => {
        if (_.includes(this.props.filteredCategories, event.category)) {
          return event;
        }
        return null;
      });

    return (
      <View
        style={styles.container}
      >
        <Modal
          animationType={'slide'}
          style={{ height: 20 }}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <View>
            {categories}
          </View>
          <ActionButton
            iconName={getPlatformIcon('refresh')}
            actionText={'Submit'}
            backgroundColor={backgroundIconButtonColor}
            iconColor={iconColor}
            onPress={this.onFilterSubmit}
          />
        </Modal>
        <Icon.ToolbarAndroid
          style={styles.toolbar}
          title='Barteguiden'
          onIconClicked={() => this.props.navigator.pop()}
          actions={[{ title: 'Filter', show: 'always', iconName: 'md-funnel' },
          { title: 'Innstillinger', show: 'always', iconName: 'md-more' }]}
          onActionSelected={this.onActionSelected}
        />
        <ScrollableTabView
          tabBarUnderlineStyle={{ backgroundColor: highlightColor }}
          tabBarBackgroundColor={topColor}
          tabBarActiveTextColor={highlightColor}
        >
          <Home events={this.props.events} title='Home' tabLabel='Hva skjer?' />
          <AllEvents events={filteredEvents} title='All' tabLabel='Alle' />
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
  filteredCategories: state.filter.filteredCategories,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(eventActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarteguidenApp);
