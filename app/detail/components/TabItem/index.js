import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, Left, Right, Icon, ListItem, View,
} from 'native-base';
import { FlatList, Linking } from 'react-native';
import styles from './styles';

class TabItem extends Component {
  render() {
    const {
      items, icon, favorites, itemDetails,
    } = this.props;
    return (
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <ListItem>
            <Left>
              <Text>{item.name}</Text>
            </Left>
            <Right>
              <Icon
                onPress={() => Linking.openURL(`${item.resourceURI}?ts=1&apikey=e1de723b797137f8df5c82dc72f144b8&hash=d852ab8533f950e676dc7c1021f91ca4`)}
                name={icon}
                style={{ color: favorites.includes(itemDetails) ? '#f5bb35' : '#333', fontSize: 30 }}
              />
            </Right>
          </ListItem>
        )}
        ListEmptyComponent={() => (
          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Icon
              onPress={() => Linking.openURL(`${item.resourceURI}?ts=1&apikey=e1de723b797137f8df5c82dc72f144b8&hash=d852ab8533f950e676dc7c1021f91ca4`)}
              name={icon}
              style={{
                color: favorites.includes(itemDetails) ? '#f5bb35' : '#333',
                fontSize: 50,
              }}
            />
            <Text>
              Nenhum registro encontrado...
            </Text>
          </View>
        )}
      />
    );
  }
}

export default connectStyle('marvel.TabItem', styles, TabItem);
