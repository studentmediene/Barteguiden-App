'use strict';

import React from  'react-native'
import EventListItem from './EventListItem';
import _ from 'lodash';
import {formatDate} from './utilities';
import {generalBackground} from './constants';

var {
  StyleSheet,
  Text,
  View,
  ListView,
} = React;


var EventList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }),
      loaded: false,
    };
  },

  componentWillMount() {
    if (this.props.events) {
      this._updateDataSource(this.props.events);
    }
  },

  componentWillReceiveProps(props) {
    this._updateDataSource(props.events);
  },

  _updateDataSource(events) {
     let newDataBlob = _.groupBy(events, (event) => {
        return formatDate(event.startAt);
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(newDataBlob)
      });
  },

  _renderEvent: function(event) {
    return(
        <EventListItem navigator={this.props.navigator} event={event}/>
    )
  },

  render: function() {
   return (<ListView
     dataSource={this.state.dataSource}
     renderRow={this._renderEvent}
     renderSectionHeader = {this._renderSectionHeader}
     automaticallyAdjustContentInsets={false}
     contentInset={{bottom:49}}
     style={styles.listView}
   />)
  },

  _renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.sectionHeader}>{sectionID}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  listView: {
    backgroundColor: generalBackground,
  },
  sectionHeader: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  headerContainer: {
    borderBottomWidth: 3,
    borderColor: '#5CCFFF',
    backgroundColor: generalBackground,
  }
});

export default EventList;
