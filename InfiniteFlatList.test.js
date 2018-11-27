import InfiniteFlatList from './InfiniteFlatList';
import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

test('InfiniteFlatList renders correctly', () => {
  const data = [{ id: '123', name: 'Test' }];
  const renderItem = item => <Text>{item.name}</Text>;
  const tree = renderer.create(<InfiniteFlatList data={data} renderItem={renderItem}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
