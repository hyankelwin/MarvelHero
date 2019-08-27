import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, Content, Card, CardItem, Body, Button,
} from 'native-base';
import { TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';

class HeroList extends Component {
  render() {
    const { list, onPress, loadMoreHero } = this.props;
    return (
      <FlatList
        data={list.results}
        numColumns={2}
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
                  <Body>
                    <Button transparent>
                      <Text style={{ color: '#FFF' }}>{item.name}</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        )}
        onEndReached={() => loadMoreHero()}
      />
    );
  }
}

export default connectStyle('marvel.HeroList', styles, HeroList);
