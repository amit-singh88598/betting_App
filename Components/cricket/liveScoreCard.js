import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import LiveScore from "./liveScore";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
  teamFontSize: {
    fontSize: "0.8em",
    fontWeight: 600,
  },
}));

function LiveScoreCard(props) {
  const classes = useStyle();
  return (
    <div>
      <Card className={classes.cardStyle}>
        <div className={classes.justifyCenter}>
          <Typography style={{ fontSize: "0.7em", fontWeight: 600 }}>
            Simulated match -
          </Typography>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <div style={{ marginLeft: 10 }}>
              <Typography className={classes.teamFontSize}>
                Rajasthan Royals
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div style={{ float: "right", marginRight: 10 }}>
              <Typography className={classes.teamFontSize}>
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
