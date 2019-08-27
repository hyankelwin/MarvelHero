import React, { Component, Fragment } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  ListItem, Left, Text, Right,
} from 'native-base';
import styles from './styles';

class OptionHero extends Component {
  render() {
    const { name, quantity } = this.props;
    return (
      <Fragment>
        <ListItem>
          <Left>
            <Text note>{name}</Text>
          </Left>
          <Right>
            <Text>{quantity}</Text>
          </Right>
        </ListItem>
      </Fragment>
    );
  }
}

export default connectStyle('marvel.OptionHero', styles, OptionHero);
