import React from "react";
import renderer from "react-test-renderer";

import Facebook from "./Facebook";
import GooglePlus from "./GooglePlus";
import LinkedIn from "./LinkedIn";
import Pinterest from "./Pinterest";
import Reddit from "./Reddit";
import Tumblr from "./Tumblr";
import Twitter from "./Twitter";

import SimpleShare from "./SimpleShare";

it("Facebook hasn't changed", () => {
  const tree = renderer.create(<Facebook />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("GooglePlus hasn't changed", () => {
  const tree = renderer.create(<GooglePlus />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("LinkedIn hasn't changed", () => {
  const tree = renderer.create(<LinkedIn />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Pinterest hasn't changed", () => {
  const tree = renderer.create(<Pinterest />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Reddit hasn't changed", () => {
  const tree = renderer.create(<Reddit />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Tumblr hasn't changed", () => {
  const tree = renderer.create(<Tumblr />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Twitter hasn't changed", () => {
  const tree = renderer.create(<Twitter />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("SimpleShare hasn't changed", () => {
  const tree = renderer.create(<SimpleShare />).toJSON();
  expect(tree).toMatchSnapshot();
});
