import {
  Avatar,
  Button,
  Card,
  Fab,
  IconButton,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import CricketNavItem from "./cricketNavItem";
import Match1Odds from "./match1Odds";
import Match2Odds from "./match2Odds";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: 5,
    marginTop: 15,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function CricketMarket(props) {
  const classes = useStyle();
  const router = useRouter();
  return (
    <div>
      <Card className={classes.cardStyle}>
        <Typography>Mumbai Indians v Royal Challenger Banglore</Typography>
        <div style={{ display: "flex" }}>
          <Typography>11-04-2021</Typography>
          <Typography
            style={{ marginLeft: 10, fontSize: "0.8em", marginTop: 3 }}
          >
            19:30:00
          </Typography>
        </div>
      </Card>
      <CricketNavItem />
      <div
        style={{
          marginTop: 10,
          display: "flex",
          marginBottom: 5,
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "0.9em",
          }}
        >
          Match Odds
        </Typography>
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <Typography
              style={{ marginRight: 75, fontWeight: 600, fontSize: "0.9em" }}
            >
              BACK
            </Typography>
            <Typography
              style={{ marginRight: 35, fontWeight: 600, fontSize: "0.9em" }}
            >
              LAY
            </Typography>
          </div>
        </div>
      </div>
      <Match1Odds />
      <Match2Odds />
      <div className={classes.fab}>
        <Avatar elevation={4} onClick={() => router.push("/Cricket/myMarkets")}>
          <Visibility />
        </Avatar>
      </div>
    </div>
  );
}

export default CricketMarket;
