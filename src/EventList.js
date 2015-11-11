'use strict';

import React from  'react-native'
import moment from 'moment';
import 'moment/locale/nb';
import EventListItem from './EventListItem';
import _ from 'lodash';

var {
  StyleSheet,
  Text,
  View,
  ListView,
} = React;


/*
 Function used for sorting the events by date.
 */
var sortByDate = function(event1, event2) {
  return new Date(event1.startAt).getTime() - new Date(event2.startAt).getTime();
};

var EventList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }),
      dataBlob: {},
      loaded: false,
    };
  },

  componentWillReceiveProps: function(props) {
    moment.locale('nb');
    var newDataBlob = _.groupBy(props.events, (event) => {
      return moment(event.startAt).format('Do MMMM YYYY');
    });

    this.setState({
      dataBlob: newDataBlob,
      dataSource: this.state.dataSource.cloneWithRowsAndSections(newDataBlob)
    });

  },

  _renderEvent: function(event) {
    return(
        <EventListItem event={event}/>
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
    backgroundColor: '#EFEFEF'
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
    backgroundColor: '#EFEFEF',
  }
});

export default EventList;
