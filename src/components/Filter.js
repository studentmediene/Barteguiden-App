import React, { Component } from 'react';
import ActionCheckBox from '../components/ActionCheckBox';
import ActionButton from '../components/ActionButton';
import { categoryElements } from '../constants';
import { getPlatformIcon } from '../utilities';
import { highlightColor, containerColor, backgroundIconButtonColor, favoriteColor, iconColor } from '../colors';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryCheck: [] };
  }

  componentWillReceiveProps() {
    this.setState({ categoryCheck: this.props.filteredCategories })
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
      <View>

        <View>

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
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  filteredCategories: state.filter.filteredCategories,
});

export default connect(mapStateToProps)(Filter);
