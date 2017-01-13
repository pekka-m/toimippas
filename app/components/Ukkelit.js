import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Ukkeli from './Ukkeli';

const Ukkelit = (props) => {
  const { users, onUkkeliClick } = props;
  const UkkeliComponents = users.map(user => (
    <Ukkeli key={user.id} {...user} onClick={id => onUkkeliClick(id)} />
  ));
  return (
    <ScrollView style={{ padding: 18 }}>
      {UkkeliComponents}
    </ScrollView>
  );
};

Ukkelit.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.bool.isRequired,
  })),
  onUkkeliClick: PropTypes.func.isRequired,
};

Ukkelit.defaultProps = {
  users: [],
};

export default Ukkelit;
