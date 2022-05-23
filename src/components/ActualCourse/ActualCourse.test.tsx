import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import ActualCourse from "./ActualCourse";
import { createStore } from "../../app/reducers/store";

test("render paragraph with info before clicking", () => {
  render(
    <Provider store={createStore()}>
      <ActualCourse />
    </Provider>
  );

  const parahraphElement = screen.getByText("Default Value");
  expect(parahraphElement).toHaveTextContent("Default Value");

  ;
});
