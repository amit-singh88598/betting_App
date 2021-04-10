import React from "react";
import CricketOpenBets from "../../Components/cricket/cricketOpenBets";
import Header from "../../Layouts/header";

function OpenBets(props) {
  return (
    <div>
      <Header>
        <CricketOpenBets />
      </Header>
    </div>
  );
}

export default OpenBets;
