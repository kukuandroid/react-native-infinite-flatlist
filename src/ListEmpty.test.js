import ListEmpty from "./ListEmpty";
import React from "react";
import renderer from "react-test-renderer";

test('ListEmpty renders correctly', () => {
  const tree = renderer.create(<ListEmpty text='Empty Items' />).toJSON();
  expect(tree).toMatchSnapshot();
});
