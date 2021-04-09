import React from "react";
import MatchDetail from "../../Components/cricket/matchDetail";
import Header from "../../Layouts/header";

function MatchDetails(props) {
  return (
    <div>
      <Header>
        <MatchDetail />
      </Header>
    </div>
  );
}

export default MatchDetails;
