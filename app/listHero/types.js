import { types, async } from 'utils/type-creator';

export default types(
  [
    ...async('REQUEST'),
    ...async('SEARCH_HERO'),
    ...async('LIST_PAGINATION'),
    'SET_HERO',
    'SET_PAGINATION',
  ],
  'LIST_HERO',
);
