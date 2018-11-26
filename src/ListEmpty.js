import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

const ListEmpty = ({text, containerStyle, textStyle}) => (
  <View style={containerStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>
);

ListEmpty.propTypes = {
  text: PropTypes.string,
  containerStyle: PropTypes.object
};

ListEmpty.defaultProps = {
  text: 'Empty',
  textStyle: {
    fontSize: 16,
    color: '#AAA'
  },
  containerStyle: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ListEmpty;
