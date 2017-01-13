import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const Ukkeli = (props) => {
  const { name, id, team, email, onClick } = props;
  const style = {
    marginTop: 6,
    marginBottom: 6,
    padding: 8,
    backgroundColor: '#aaa',
    alignItems: 'center',
  };
  if (team) {
    style.backgroundColor = '#5f5';
  }
  return (
    <TouchableOpacity onPress={() => onClick(id)}>
      <View style={style}>
        <Text style={{ fontSize: 16 }}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

Ukkeli.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  team: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Ukkeli;
