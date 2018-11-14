import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'native-base';

const ListEmpty = ({text}) => {
  return (
    <View style={{flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 16, color: '#AAA'}}>{text}</Text>
    </View>
  )
};

ListEmpty.propTypes = {
  text: PropTypes.string
};

export default ListEmpty;
