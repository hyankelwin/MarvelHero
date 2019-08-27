import types from 'listHero/types';

export function loadListRequest(limit) {
  return dispatch => dispatch({
    type: types.REQUEST,
    payload: {
      request: {
        url: 'characters?&ts=1&apikey=e1de723b797137f8df5c82dc72f144b8&hash=d852ab8533f950e676dc7c1021f91ca4',
        method: 'GET',
        params: {
          limit: limit || '',
        },
      },
    },
  })
    .then(response => response)
    .catch((error) => {
      dispatch(error);
    });
}

export function searchHero(search) {
  return dispatch => dispatch({
    type: types.SEARCH_HERO,
    search,
    payload: {
      request: {
        url: search.length
          ? `characters?nameStartsWith=${search}&ts=1&apikey=e1de723b797137f8df5c82dc72f144b8&hash=d852ab8533f950e676dc7c1021f91ca4`
          : 'characters?ts=1&apikey=e1de723b797137f8df5c82dc72f144b8&hash=d852ab8533f950e676dc7c1021f91ca4',
        method: 'GET',
      },
    },
  })
    .then(response => response)
    .catch((error) => {
      dispatch(error);
    });
}

export function setPagination() {
  return {
    type: types.SET_PAGINATION,
  };
}

export function pagination(limit) {
  return dispatch => dispatch({
    type: types.LIST_PAGINATION,
    payload: {
      request: {
        url: `characters?limit=${limit}&ts=1&apikey=e1de723b797137f8df5c82dc72f144b8&hash=d852ab8533f950e676dc7c1021f91ca4`,
        method: 'GET',
      },
    },
  })
    .then(response => response)
    .catch((error) => {
      dispatch(error);
    });
}

export function saveHero(hero) {
  return {
    type: types.SET_HERO,
    hero,
  };
}
