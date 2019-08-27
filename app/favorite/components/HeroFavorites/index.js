import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, Content, Card, CardItem, Left, Right, Icon,
} from 'native-base';
import { TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';

class HeroFavorites extends Component {
  render() {
    const { favorites, onPress } = this.props;
    return (
      <FlatList
        data={favorites}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <Content>
            <TouchableOpacity onPress={() => onPress(item)}>
              <Card>
                <CardItem cardBody>
                  <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ backgroundColor: '#22262a' }}>
                  <Left>
                    <Text style={{ color: '#FFF' }}>{item.name}</Text>
                  </Left>
                  <Right>
                    <Icon
                      name="star-circle"
                      style={{ color: '#f5bb35', fontSize: 30 }}
                    />
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', color: '#FFF' }}>
            You have no favorite heroes...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('marvel.HeroFavorites', styles, HeroFavorites);
