import React, { Component } from 'react';
import { FavoriteScreen } from 'favorite/screens';
import { connect } from 'react-redux';
import { details } from 'detail/actions';
import { list } from 'listHero/actions';
import { navigate } from 'services/navigator';

class FavoriteContainer extends Component {
  handlePressItem = (item) => {
    const { favorite } = this.props;
    favorite(item);
  }

  handlePressHero = (item) => {
    const { saveHero } = this.props;
    saveHero(item);
    navigate('Detail');
  }

  render() {
    const { favorites } = this.props;
    return (
      <FavoriteScreen
        favorites={favorites}
        onPressHero={item => this.handlePressHero(item)}
      />
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.detail.details.favorite,
});

const mapDispatchToProps = {
  ...details,
  ...list,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
