import React from "react";
import CricketResults from "../../Components/cricket/cricketResults";
import Header from "../../Layouts/header";

function Results(props) {
  return (
    <div>
      <Header>
        <CricketResults />
      </Header>
    </div>
  );
}

export default Results;
