import { combineReducers } from 'redux';
import listHero from 'listHero/reducers';
import detail from 'detail/reducers';
import favorite from 'favorite/reducers';

export default combineReducers({
  listHero,
  detail,
  favorite,
});
