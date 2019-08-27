import React, { Component } from 'react';
import { Container } from 'native-base';
import { HeroFavorites } from 'favorite/components';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import * as Navigator from 'services/navigator';

class FavoriteScreen extends Component {
  render() {
    const { favorites, onPressHero } = this.props;
    return (
      <Container style={{ backgroundColor: '#22262a' }}>
        <Header
          title="Favorites"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <HeroFavorites
          favorites={favorites}
          onPress={item => onPressHero(item)}
        />
      </Container>
    );
  }
}

export default FavoriteScreen;
