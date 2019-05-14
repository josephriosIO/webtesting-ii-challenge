import React, { useState } from "react";

function Display(props) {
  return (
    <div>
      <h2>INFO PANEL</h2>
      <div>
        <div>
          <h3>strike</h3>
          <p>{props.strike}</p>
        </div>
        <div>
          <h3>ball</h3>
          <p>{props.ball}</p>
        </div>
        <div>
          <h3>foul</h3>
          <p>{props.foul}</p>
        </div>
      </div>
    </div>
  );
}

export default Display;
