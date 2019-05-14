import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";

describe("<App />", () => {
  it("renders fine", () => {
    render(<App />);
  });
});
