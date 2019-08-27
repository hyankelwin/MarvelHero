import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from 'navigation';
import { Container, StyleProvider } from 'native-base';

import SplashScreen from 'react-native-splash-screen';
import getTheme from './style/theme/components';
import marvel from './style/theme/variables/marvel';
import store from './store';

class Master extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(marvel)}>
          <Container>
            <Router />
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}

export default Master;
