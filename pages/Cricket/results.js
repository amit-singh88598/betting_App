import React from "react";
import CricketResults from "../../Components/cricket/cricketResults";
import MobHeader from "../../Layouts/mobHeader";

function Results(props) {
  return (
    <div>
      <MobHeader>
        <CricketResults />
      </MobHeader>
    </div>
  );
}

export default Results;
