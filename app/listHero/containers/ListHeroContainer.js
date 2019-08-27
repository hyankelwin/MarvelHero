import React, { Component } from 'react';
import { ListHeroScreen } from 'listHero/screens';
import { connect } from 'react-redux';
import { list } from 'listHero/actions';
import { navigate } from 'services/navigator';

class ListHeroContainer extends Component {
  async componentDidMount() {
    const {
      loadListRequest, limit,
    } = this.props;
    await loadListRequest(limit);
  }

  handlePressHero = (item) => {
    const { saveHero } = this.props;
    saveHero(item);
    navigate('Detail');
  }

  handleChangeSearch = (value) => {
    const { searchHero } = this.props;
    setTimeout(() => {
      searchHero(value);
    }, 200);
  }

  handleLoadMoreHero = async () => {
    const {
      setPagination, pagination, limit, search,
    } = this.props;
    if (!search.length) {
      await setPagination();
      await pagination(limit);
    }
  }

  render() {
    const { list } = this.props;
    return (
      <ListHeroScreen
        list={list.data}
        isLoading={list.isLoading}
        onPressHero={item => this.handlePressHero(item)}
        onChangeSearch={value => this.handleChangeSearch(value)}
        onLoadMoreHero={() => this.handleLoadMoreHero()}
      />
    );
  }
}

const mapStateToProps = state => ({
  list: state.listHero.list,
  limit: state.listHero.list.limit,
  search: state.listHero.list.search,
});

const mapDispatchToProps = {
  ...list,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeroContainer);
