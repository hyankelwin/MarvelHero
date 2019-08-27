import React, { Component } from 'react';
import LandingPage from 'landingPage/components/LandingPage';

const image = require('../../common/images/logo.png');

class LandingPageScreen extends Component {
  render() {
    return (
      <LandingPage
        statusBg="#FFF"
        statusBar="dark-content"
        image={image}
        title="Marvel Heroes"
        message="Dive into the dazzling domain of all the classic characters you love - and those you’ll soon discover!"
      />
    );
  }
}

export default LandingPageScreen;
