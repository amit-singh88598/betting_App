import { Container, Typography } from "@material-ui/core";
import React from "react";
import LiveSeries from "../../Components/cricket/liveSeries";
import MobHeader from "../../Layouts/mobHeader";

function Cricket(props) {
  return (
    <div>
      <MobHeader>
        <LiveSeries />
      </MobHeader>
    </div>
  );
}

export default Cricket;
