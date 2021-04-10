import { Card, Link } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

function CricketNavItem(props) {
  const router = useRouter();
  return (
    <div>
      <Card style={{ backgroundColor: "#524e4e", marginTop: 10 }}>
        <div style={{ display: "flex" }}>
          <Link
            style={{
              marginRight: 5,
              fontSize: "0.8em",
              marginLeft: 10,
              color: "#c8dbd8",
            }}
            onClick={() => router.push("/Cricket/market")}
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
    </div>
  );
}

export default CricketNavItem;
