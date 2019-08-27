import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import {
  createStackNavigator, createAppContainer,
} from 'react-navigation';
import * as Navigator from 'services/navigator';

import { LandingPageContainer } from 'landingPage/containers';
import { FavoriteContainer } from 'favorite/containers';
import { ListHeroContainer } from 'listHero/containers';
import { DetailContainer } from 'detail/containers';

const StackNavigator = createStackNavigator(
  {
    LandingPage: {
      screen: LandingPageContainer,
    },

    Favorite: {
      screen: FavoriteContainer,
    },

    ListHero: {
      screen: ListHeroContainer,
    },

    Detail: {
      screen: DetailContainer,
    },
  },
  {
    initialRouteName: 'LandingPage',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
);

const NavigatorContainer = createAppContainer(StackNavigator);

const Router = () => (
  <Fragment>
    <StatusBar backgroundColor="#ed4631" barStyle="dark-content" />
    <NavigatorContainer
      ref={Navigator.setContainer}
    />
  </Fragment>
);

export default Router;
