import React from "react";
import CricketMarket from "../../Components/cricket/cricketMarket";
import Header from "../../Layouts/header";

function Market(props) {
  return (
    <div>
      <Header>
        <CricketMarket />
      </Header>
    </div>
  );
}

export default Market;
