import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Ukkelit from '../../components/Ukkelit';
import Logo from '../../components/NavigationBarLeft';

class UkkelitPage extends React.Component {
  static route = {
    navigationBar: {
      renderLeft: () => <Logo />
    }
  }
  render() {
    return (
      <View>
        <Text style={{ marginLeft: 18, marginTop: 6, fontSize: 24 }}>{this.props.title}</Text>
        <Ukkelit users={this.props.users} onUkkeliClick={id => this.props.navigator.push('ukkeli', { id })} />
      </View>
    );
  }
}

UkkelitPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.bool.isRequired,
  })),
  title: PropTypes.string.isRequired,
};

UkkelitPage.defaultProps = {
  users: [],
};

export default UkkelitPage;
