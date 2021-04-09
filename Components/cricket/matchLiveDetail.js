import { Card, Link, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Market from "./market";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: 5,
    marginTop: 15,
  },
}));

function MatchLiveDetail(props) {
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
      <Card style={{ backgroundColor: "#524e4e", marginTop: 10 }}>
        <div style={{ display: "flex" }}>
          <Link
            style={{
              marginRight: 5,
              fontSize: "0.8em",
              marginLeft: 10,
              color: "#c8dbd8",
            }}
            onClick={() => router.push("/Cricket/matchLiveDetails")}
          >
            MARKET
          </Link>
          <Link
            style={{
              marginRight: 5,
              fontSize: "0.8em",
              marginLeft: 5,
              color: "#c8dbd8",
            }}
            onClick={() => router.push("/Cricket/news")}
          >
            NEWS
          </Link>
          <Link
            style={{
              marginRight: 5,
              fontSize: "0.8em",
              marginLeft: 5,
              color: "#c8dbd8",
            }}
            onClick={() => router.push("/Cricket/live")}
          >
            LIVE
          </Link>
          <Link
            style={{
              marginRight: 5,
              fontSize: "0.8em",
              marginLeft: 5,
              color: "#c8dbd8",
            }}
            onClick={() => router.push("/Cricket/openBets")}
          >
            OPEN BETS
          </Link>
          <Link
            style={{
              marginRight: 5,
              fontSize: "0.8em",
              marginLeft: 5,
              color: "#c8dbd8",
            }}
            onClick={() => router.push("/Cricket/results")}
          >
            RESULTS
          </Link>
        </div>
      </Card>
      <div
        style={{
          marginTop: 10,
        }}
      ></div>
      <Market />
    </div>
  );
}

export default MatchLiveDetail;
