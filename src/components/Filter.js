import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Modal,
  Text,
  View,
  TouchableHighlight,
}from 'react-native';

class Filter extends Component{
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render(){
    return(
      <View>
        <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <Text>
            Hello
          </Text>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </Modal>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Filter;
