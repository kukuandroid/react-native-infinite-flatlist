import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const ListFooter = ({loading}) => {
  if (!loading) return null;

  return (
    <View style={{paddingVertical: 20, borderColor: '#CCC'}}>
      <ActivityIndicator animating size="large" />
    </View>
  );
};

export default ListFooter;
