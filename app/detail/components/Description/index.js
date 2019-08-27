import React, { Component, Fragment } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  ListItem, Left, Text,
} from 'native-base';
import styles from './styles';

class Description extends Component {
  render() {
    const { title } = this.props;
    return (
      <Fragment>
        <ListItem>
          <Left>
            <Text note>{title || 'This hero has no description'}</Text>
          </Left>
        </ListItem>
      </Fragment>
    );
  }
}

export default connectStyle('marvel.Description', styles, Description);
