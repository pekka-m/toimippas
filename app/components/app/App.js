import React, { Component, PropTypes } from 'react';
import {
  NavigationContext,
  NavigationProvider,
  NavigationStyles,
  StackNavigation,
} from '@exponent/ex-navigation';
// import Snackbar from 'react-native-snackbar';
import router from '../../router';
// import store from '../../store';
// import Nav from '../Nav';
// import UkkelitContainer from '../../pages/ukkelit/UkkelitContainer';

// const navigationContext = new NavigationContext({
//   router,
//   store,
// });

class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error === 'ei kalevi ei ollu mitään') {
      nextProps.fetchUsers();
    }
  }

  render() {
    const { error, fetching, fetched } = this.props;
    // if (error) {
    //   Snackbar.show({
    //     title: 'ERRORI RAATO!',
    //     duration: Snackbar.LENGHT_SHORT,
    //   });
    // } else if (fetching) {
    //   Snackbar.show({
    //     title: 'FETSATAAN TAUHKAA...',
    //     duration: Snackbar.LENGHT_SHORT,
    //   });
    // } else if (fetched) {
    //   Snackbar.show({
    //     title: 'TAUHKAT FETSATTU',
    //     duration: Snackbar.LENGHT_SHORT,
    //   });
    // }
    return (
      <NavigationProvider router={router}>
        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#aaa',
              tintColor: '#fff',
              title: 'Niin hyvä appis',
              titleStyle: {
                fontWeight: 'bold',
              },
            },
            styles: {
              ...NavigationStyles.FloatHorizontal,
            },
          }}
          initialRoute="ukkelit"
        />
      </NavigationProvider>
    );
  }
}

// renderLeft: () => (
//                 <LeftButton />
//               ),

App.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  error: PropTypes.string,
};

App.defaultProps = {
  error: null,
};

export default App;
