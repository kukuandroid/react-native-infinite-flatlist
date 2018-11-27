import ListFooter from "./ListFooter";
import React from "react";
import renderer from "react-test-renderer";

test('ListFooter renders correctly', () => {
  const tree = renderer.create(<ListFooter loading={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
