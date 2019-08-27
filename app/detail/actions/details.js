import types from 'detail/types';

export function favorite(item) {
  return {
    type: types.FAVORITE,
    item,
  };
}
