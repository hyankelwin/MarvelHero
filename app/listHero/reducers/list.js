import { handleActions, combineActions } from 'redux-actions';
import types from 'listHero/types';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: false,
  hero: '',
  limit: 10,
  search: '',
};

const beginLoading = combineActions(
  types.REQUEST,
);

const stopLoading = combineActions(
  types.REQUEST_SUCCESS,
  types.REQUEST_FAIL,
);

const reducer = handleActions({
  [beginLoading]: state => ({
    ...state,
    isLoading: true,
  }),
  [stopLoading]: state => ({
    ...state,
    isLoading: false,
  }),
  [types.REQUEST_SUCCESS]: (state, { payload: { data: { data: result } } }) => ({
    ...state,
    data: result,
  }),
  [types.LIST_PAGINATION_SUCCESS]: (state, { payload: { data: { data: result } } }) => ({
    ...state,
    data: result,
  }),
  [types.SEARCH_HERO_SUCCESS]: (state, { payload: { data: { data: result } } }) => ({
    ...state,
    data: result,
  }),
  [types.SEARCH_HERO]: (state, { search: result }) => ({
    ...state,
    search: result,
  }),
  [types.REQUEST_FAIL]: state => ({
    ...state,
    error: true,
  }),
  [types.SET_HERO]: (state, { hero }) => ({
    ...state,
    hero,
  }),
  [types.SET_PAGINATION]: state => ({
    ...state,
    limit: state.limit + 10,
  }),
}, INITIAL_STATE);

export default reducer;
