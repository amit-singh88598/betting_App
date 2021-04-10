import React from "react";
import CricketLive from "../../Components/cricket/cricketLive";
import Header from "../../Layouts/header";

function Live(props) {
  return (
    <div>
      <Header>
        <CricketLive />
      </Header>
    </div>
  );
}

export default Live;
