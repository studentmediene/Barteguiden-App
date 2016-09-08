import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem';
import EmptyErrorList from './EmptyListMessages';
import _ from 'lodash';
import { formatDate, normalize } from '../utilities';
import { backgroundColor, highlightColor } from '../colors';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
} from 'react-native';


class EventList extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      }),
      loaded: false,
    };
  }

  componentWillMount() {
    if (this.props.events) {
      this._updateDataSource(this.props.events);
    }
  }

  componentWillReceiveProps(props) {
    this._updateDataSource(props.events);
  }

  _updateDataSource = (events) => {
    const newDataBlob = _.groupBy(events, event => (
      formatDate(event.startAt)
    ));

    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(newDataBlob),
    });
  };

  _renderEvent = event => (
    <EventListItem navigator={this.props.navigator} event={event} />
  );

  _renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.sectionHeader}>{sectionID}</Text>
      </View>
    );
  }

  render() {
    if (this.props.eventsLoading) {
      return (
        <View style={styles.listView}>
          <ActivityIndicator style={styles.activityIndicator} />
        </View>
      );
    } else if (this.props.eventsLoadingFailed) {
      return (
        <EmptyErrorList />
      );
    } else if (this.props.emptyListMessage && this.props.events.length === 0) {
      const EmptyListMessage = this.props.emptyListMessage;
      return (
        <EmptyListMessage />
      );
    }
    return (<ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderEvent}
      renderSectionHeader={this._renderSectionHeader}
      renderHeader={this.props.renderHeader}
      automaticallyAdjustContentInsets={false}
      contentInset={{ bottom: 49 }}
      style={styles.listView}
    />);
  }
}

const styles = StyleSheet.create({
  listView: {
    backgroundColor,
    flex: 1,
  },
  activityIndicator: {
    paddingTop: 20,
  },
  sectionHeader: {
    marginLeft: 10,
    fontSize: normalize(16),
    color: 'black',
    fontWeight: '600',
  },
  headerContainer: {
    borderBottomWidth: 3,
    padding: 2,
    borderColor: highlightColor,
    backgroundColor,
  },
});

const mapStateToProps = state => ({
  eventsLoading: state.events.eventsLoading,
  eventsLoadingFailed: state.events.eventsLoadingFailed,
});

export default connect(mapStateToProps)(EventList);
