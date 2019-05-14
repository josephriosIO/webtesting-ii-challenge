import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";

describe("<Display />", () => {
  it("renders fine", () => {
    render(<Display />);
  });
});
