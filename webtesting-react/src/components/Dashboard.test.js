import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";

describe("<Dashboard />", () => {
  it("renders fine", () => {
    render(<Dashboard />);
  });
});
