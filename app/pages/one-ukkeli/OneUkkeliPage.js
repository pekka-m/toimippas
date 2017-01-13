import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Ukkeli from '../../components/Ukkeli';

const UkkelitPage = (props) => {
  const { user, title, toggleUkkeliTeam, navigator } = props;
  return (
    <View>
      <Text style={{ marginLeft: 18, marginTop: 6, fontSize: 24 }}>{title}</Text>
      <View style={{ padding: 18 }}>
        <Ukkeli key={user.id} {...user} onClick={id => toggleUkkeliTeam(id)} />
      </View>
    </View>
  );
};

UkkelitPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.bool.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  toggleUkkeliTeam: PropTypes.func.isRequired,
};

export default UkkelitPage;
