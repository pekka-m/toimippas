import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import users from './reducers/userReducer';

// const createStoreWithNavigation = createNavigationEnabledStore({
//   createStore,
//   navigationStateKey: 'navigation',
// });

const enhancer = compose(
  applyMiddleware(thunk, promise(), logger()),
  autoRehydrate(),
);

// const store = createStoreWithNavigation(
//   combineReducers({
//     navigation: NavigationReducer,
//     users,
//   }),
//   enhancer,
// );

const reducer = combineReducers({
  users,
});

const store = createStore(reducer, enhancer);

// persistStore(store).purge();
persistStore(store, { storage: AsyncStorage });


export default createStore(reducer, applyMiddleware(thunk, promise(), logger()));
