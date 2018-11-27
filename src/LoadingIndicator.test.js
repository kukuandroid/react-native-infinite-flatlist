import LoadingIndicator from "./LoadingIndicator";
import React from "react";
import renderer from "react-test-renderer";

test('LoadingIndicator renders correctly', () => {
  const tree = renderer.create(<LoadingIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});
