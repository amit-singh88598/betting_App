import React from "react";
import CricketLive from "../../Components/cricket/cricketLive";
import MobHeader from "../../Layouts/mobHeader";

function Live(props) {
  return (
    <div>
      <MobHeader>
        <CricketLive />
      </MobHeader>
    </div>
  );
}

export default Live;
