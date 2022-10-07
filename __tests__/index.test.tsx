import { cleanup, render } from "@testing-library/react";
import Homepage from "@/pages/index";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

describe("Home page", () => {
  render(
    <Provider store={store}>
      <Homepage sortedItems={[]} />
    </Provider>
  );

  afterAll(cleanup);

  it("renders Home page", () => {
    expect(true);
  });
});
