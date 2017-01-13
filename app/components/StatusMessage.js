import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const StatusMessage = (props) => {
  const errorStyle = props.error ? { color: 'red' } : null;
  return (
    <Text style={errorStyle}>{props.message}</Text>
  );
};

export default StatusMessage;
