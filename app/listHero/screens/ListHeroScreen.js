import React, { Component } from 'react';
import { Container, Spinner } from 'native-base';
import { Header } from 'common/components';
import * as Navigator from 'services/navigator';
import { BASE_COLOR } from 'style/colors';
import { Search, HeroList } from 'listHero/components';

class ListHeroScreen extends Component {
  render() {
    const {
      list, isLoading, onPressHero, onChangeSearch, onLoadMoreHero,
    } = this.props;
    if (isLoading) {
      return (<Spinner />);
    }
    return (
      <Container style={{ backgroundColor: '#22262a' }}>
        <Header
          title="Hero"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />
        <Search
          onSearch={value => onChangeSearch(value)}
        />
        <HeroList
          list={list}
          onPress={item => onPressHero(item)}
          loadMoreHero={() => onLoadMoreHero()}
        />
      </Container>
    );
  }
}

export default ListHeroScreen;
