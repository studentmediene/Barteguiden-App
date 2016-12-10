import React, { Component } from 'react';
import ActionCheckBox from '../components/ActionCheckBox';
import ActionButton from '../components/ActionButton';
import { categoryElements } from '../constants';
import { getPlatformIcon } from '../utilities';
import { highlightColor, containerColor, backgroundIconButtonColor, favoriteColor, iconColor } from '../colors';
import {
  View,
  Modal,
  Image,
  Text,
} from 'react-native';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false, categoryCheck: [] };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ modalVisible: nextProps.modalVisible });
  }

  onCategoryCheck(categoryName) {
    const temp = this.state.categoryCheck;
    if (this.state.categoryCheck.includes(categoryName)) {
      temp.splice(temp.indexOf(categoryName), 1);
    } else {
      temp.push(categoryName);
    }
    this.setState({ categoryCheck: temp });
  }

  onFilterSubmit = () => {
    this.props.onFilterSubmit(this.state.categoryCheck);
  }

  setModalVisible = (visible) => {
    this.props.setModalVisible(visible);
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

// TODO: styling modal to dialog, buttons and checkbox labels

    return (
      <Modal
        animationType={'slide'}
        style={{ padding: 100,
        right: 100,
        bottom: 100,
        left: 100,
      }}
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <View>
          <Text
            style={{ fontSize: 18,
            marginVertical: 10,
            paddingBottom: 3,
            paddingLeft: 10,
            color: 'black',
          }}
          >Filter</Text>
          { categories }
        </View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <ActionButton
            iconName={getPlatformIcon('checkmark')}
            actionText={'Submit'}
            backgroundColor={backgroundIconButtonColor}
            iconColor={iconColor}
            onPress={this.onFilterSubmit}
          />
          <ActionButton
            iconName={getPlatformIcon('close')}
            actionText={'Avslut'}
            backgroundColor={favoriteColor}
            iconColor={iconColor}
            onPress={() => this.setModalVisible(false)}
          />
        </View>
      </Modal>
    );
  }
}

export default Filter;
