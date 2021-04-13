import React from "react";
import MatchDetail from "../../Components/cricket/matchDetail";
import MobHeader from "../../Layouts/mobHeader";

function MatchDetails(props) {
  return (
    <div>
      <MobHeader>
        <MatchDetail />
      </MobHeader>
    </div>
  );
}

export default MatchDetails;
