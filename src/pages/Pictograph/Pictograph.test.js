import React from "react";
import Pictograph from "./index.js";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Pictograph", () => {
  const render = (props) =>
    renderer.create(
      <BrowserRouter>
        <Pictograph {...props} />
      </BrowserRouter>
    );

  const testPageRendering = (gridName) => {
    describe(`${gridName} renders correctly`, () => {
      test("renders correctly", () => {
        const component = render({ gridName });
        expect(component).toMatchSnapshot();
      });
    });
  };

  ["fire", "ems", "police", "help"].map(testPageRendering);
});
