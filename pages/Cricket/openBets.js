import React from "react";
import CricketOpenBets from "../../Components/cricket/cricketOpenBets";
import MobHeader from "../../Layouts/mobHeader";

function OpenBets(props) {
  return (
    <div>
      <MobHeader>
        <CricketOpenBets />
      </MobHeader>
    </div>
  );
}

export default OpenBets;
