import { Container, Typography } from "@material-ui/core";
import React from "react";
import LiveSeries from "../../Components/cricket/liveSeries";
import Header from "../../Layouts/header";

function Cricket(props) {
  return (
    <div>
      <Header>
        <LiveSeries />
      </Header>
    </div>
  );
}

export default Cricket;
