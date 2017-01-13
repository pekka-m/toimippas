import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/app/AppContainer';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('Toimippas', () => App);

// <NavigationProvider context={navigationContext}>
//       <StackNavigation initialRoute={router.getRoute('ukkelit')} />
//     </NavigationProvider>
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import UkkelitContainer from './pages/ukkelit/UkkelitContainer';
// import TeamContainer from './pages/team/TeamContainer';
// import SettingsContainer from './pages/settings/SettingsContainer';
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={AppContainer}>
//         <IndexRoute component={UkkelitContainer} />
//         <Route path="ukkelit" component={UkkelitContainer} />
//         <Route path="team(/:member)" component={TeamContainer} />
//         <Route path="settings" component={SettingsContainer} />
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root'),
// );
