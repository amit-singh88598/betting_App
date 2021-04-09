import { Card, Typography } from "@material-ui/core";
import React from "react";

function MostPopular(props) {
  return (
    <div>
      <Card style={{ height: 500, width: "100%" }} elevation={4}>
        <Typography>Most Popular</Typography>
      </Card>
    </div>
  );
}

export default MostPopular;
