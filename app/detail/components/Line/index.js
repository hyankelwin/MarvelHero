import React, { Component, Fragment } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  ListItem, Left, Right, Icon, Text,
} from 'native-base';
import styles from './styles';

class Line extends Component {
  render() {
    const {
      name, onPress, favorites, itemDetails,
    } = this.props;
    return (
      <Fragment>
        <ListItem onPress={() => onPress()}>
          <Left>
            <Text>{name}</Text>
          </Left>
          <Right>
            <Icon
              name="star-circle"
              style={{ color: favorites.includes(itemDetails) ? '#f5bb35' : '#333', fontSize: 30 }}
            />
          </Right>
        </ListItem>
      </Fragment>
    );
  }
}

export default connectStyle('marvel.Line', styles, Line);
