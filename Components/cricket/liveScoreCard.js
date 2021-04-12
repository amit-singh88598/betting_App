import { Card, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import LiveScore from "./liveScore";

function LiveScoreCard(props) {
  return (
    <div>
      <Card>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontSize: "0.7em", fontWeight: 600 }}>
            Simulated match -
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <div style={{ marginLeft: 10 }}>
              <Typography style={{ fontSize: "0.8em", fontWeight: 600 }}>
                Rajasthan Royals
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div style={{ float: "right", marginRight: 10 }}>
              <Typography style={{ fontSize: "0.8em", fontWeight: 600 }}>
                Punjab Kings
              </Typography>
            </div>
          </Grid>
        </Grid>
        <LiveScore />
      </Card>
    </div>
  );
}

export default LiveScoreCard;
