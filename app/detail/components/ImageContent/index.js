import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import { Image } from 'react-native';
import styles from './styles';

class ImageContent extends Component {
  render() {
    const { image } = this.props;
    return (
      <Image
        source={{ uri: `${image.path}.${image.extension}` }}
        style={styles.image}
      />
    );
  }
}

export default connectStyle('marvel.ImageContent', styles, ImageContent);
