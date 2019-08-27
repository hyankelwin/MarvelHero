import React, { Component } from 'react';
import { DetailScreen } from 'detail/screens';
import { connect } from 'react-redux';
import { details } from 'detail/actions';

class DetailContainer extends Component {
  handlePressItem = (item) => {
    const { favorite } = this.props;
    favorite(item);
  }

  render() {
    const { details, favorites } = this.props;
    return (
      <DetailScreen
        details={details}
        favorites={favorites}
        onPressItem={item => this.handlePressItem(item)}
      />
    );
  }
}

const mapStateToProps = state => ({
  details: state.listHero.list.hero,
  favorites: state.detail.details.favorite,
});

const mapDispatchToProps = {
  ...details,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
