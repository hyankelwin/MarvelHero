import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Form, Item, Input,
} from 'native-base';
import styles from './styles';

class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <Form>
        <Item>
          <Input
            style={{ color: '#FFF' }}
            placeholder="Search Hero"
            placeholderTextColor="#FFF"
            onChangeText={value => onSearch(value)}
          />
        </Item>
      </Form>
    );
  }
}

export default connectStyle('marvel.Search', styles, Search);
