import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const LoadingIndicator = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: 'transparent'}}>
    <ActivityIndicator />
  </View>
);

export default LoadingIndicator;
