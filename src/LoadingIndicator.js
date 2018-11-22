import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';

const LoadingIndicator = ({containerStyle, size}) => (
  <View style={containerStyle}>
    <ActivityIndicator animating size={size} />
  </View>
);

LoadingIndicator.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  containerStyle: PropTypes.object
};

LoadingIndicator.defaultProps = {
  size: 'large',
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'transparent'
  }
};

export default LoadingIndicator;
