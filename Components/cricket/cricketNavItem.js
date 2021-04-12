import { Card, Link, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: theme.palette.secondary.background,
    marginTop: 10,
  },
  linkStyle: {
    fontSize: "0.8em",
    marginLeft: 5,
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

function CricketNavItem(props) {
  const classes = useStyle();
  const router = useRouter();
  return (
    <div>
      <Card elevation={0} className={classes.cardStyle}>
        <div style={{ display: "flex" }}>
          <Link
            className={classes.linkStyle}
            style={{
              marginLeft: 10,
              textDecoration: "none",
            }}
            onClick={() => router.push("/Cricket/market")}
          >
            MARKET
          </Link>
          <Link
            className={classes.linkStyle}
            style={{
              textDecoration: "none",
              marginRight: 5,
            }}
            onClick={() => router.push("/Cricket/news")}
          >
            NEWS
          </Link>
          <Link
            className={classes.linkStyle}
            style={{
              textDecoration: "none",
              marginRight: 5,
            }}
            onClick={() => router.push("/Cricket/live")}
          >
            LIVE
          </Link>
          <Link
            className={classes.linkStyle}
            style={{
              textDecoration: "none",
              marginRight: 5,
            }}
            onClick={() => router.push("/Cricket/openBets")}
          >
            OPEN BETS
          </Link>
          <Link
            className={classes.linkStyle}
            style={{
              textDecoration: "none",
              marginRight: 5,
            }}
            onClick={() => router.push("/Cricket/results")}
          >
            RESULTS
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default CricketNavItem;
