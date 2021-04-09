import { Card, Typography } from "@material-ui/core";
import React from "react";

function InPlay(props) {
  return (
    <div>
      <Card style={{ height: 500, width: "100%" }}>
        <Typography>current Match</Typography>
      </Card>
    </div>
  );
}

export default InPlay;
