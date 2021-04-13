import React from "react";
import CricketMarket from "../../Components/cricket/cricketMarket";
import MobHeader from "../../Layouts/mobHeader";

function Market(props) {
  return (
    <div>
      <MobHeader>
        <CricketMarket />
      </MobHeader>
    </div>
  );
}

export default Market;
