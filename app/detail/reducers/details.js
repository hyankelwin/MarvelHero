import { handleActions } from 'redux-actions';
import types from 'detail/types';

const INITIAL_STATE = {
  favorite: [],
};

const reducer = handleActions({
  [types.FAVORITE]: (state, { item }) => ({
    ...state,
    favorite: state.favorite.includes(item)
      ? [...state.favorite.filter(i => i !== item)]
      : [...state.favorite, item],
  }),
}, INITIAL_STATE);

export default reducer;
