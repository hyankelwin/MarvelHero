import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { View, Text } from 'native-base';
import connectStyle from 'utils/connectStyle';
import * as Navigator from 'services/navigator';
import styles from './styles';

class LandingPage extends Component {
  render() {
    const {
      image,
      title,
      message,
    } = this.props;
    return (
      <View style={{ backgroundColor: '#22262a' }}>
        <StatusBar
          backgroundColor="#22262a"
          barStyle="light-content"
        />
        <View containerImg>
          <Image
            style={styles.img}
            source={image}
          />
        </View>
        <View>
          <View containerText>
            <Text title>
              {title}
            </Text>
            <Text subTitle>
              {message}
            </Text>
          </View>
          <View containerButton>
            <TouchableOpacity
              onPress={() => Navigator.navigate('ListHero')}
            >
              <View primary>
                <Text>Heroes</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Navigator.navigate('Favorite')}
            >
              <View secondary>
                <Text>Favorites</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connectStyle('marvel.LandingPage', styles, LandingPage);
