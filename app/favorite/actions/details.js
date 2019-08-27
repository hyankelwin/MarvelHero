import types from 'favorite/types';

export function favorite(item) {
  return {
    type: types.FAVORITE,
    item,
  };
}
