import React, { useState } from "react";
import Display from "./Display";

function Dashboard() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);

  const userStriked = () => {
    setStrike(strike + 1);

    if (strike === 2) {
      setStrike(0);
      setBall(0);
    }
  };
  const userBalled = () => {
    setBall(ball + 1);
    if (ball === 3) {
      setStrike(0);
      setBall(0);
    }
  };
  const userFouled = () => {
    setFoul(foul + 1);
  };
  return (
    <div>
      <Display strike={strike} ball={ball} foul={foul} />
      <div>
        <button>hit</button>
      </div>
      <div>
        <button onClick={userStriked}>strike</button>
      </div>
      <div>
        <button onClick={userBalled}>ball</button>
      </div>
      <div>
        <button onClick={userFouled}>foul</button>
      </div>
    </div>
  );
}

export default Dashboard;
