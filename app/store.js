import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import users from './reducers/userReducer';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

const middleWare = applyMiddleware(thunk, promise(), logger());

const store = createStoreWithNavigation(
  combineReducers({
    navigation: NavigationReducer,
    users,
  }),
  middleWare,
);


export default store;
