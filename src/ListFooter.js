import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ListFooter = ({loading, containerStyle, size}) => {
  if (!loading) return null;

  return (
    <View style={containerStyle}>
      <ActivityIndicator animating size={size} />
    </View>
  );
};

ListFooter.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  containerStyle: PropTypes.object
};

ListFooter.defaultProps = {
  loading: false,
  size: 'large',
  containerStyle: {
    paddingVertical: 20,
    borderColor: '#CCC'
  }
};

export default ListFooter;
