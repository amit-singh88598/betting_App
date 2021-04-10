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
      <div
        style={{
          marginTop: 10,
          display: "flex",
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
              style={{ marginRight: 20, fontWeight: 600, fontSize: "0.9em" }}
            >
              Back
            </Typography>
            <Typography
              style={{ marginRight: 15, fontWeight: 600, fontSize: "0.9em" }}
            >
              Lay
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Card
          elevation={4}
          style={{
            marginBottom: 5,
          }}
        >
          <div>
            <div
              style={{
                margin: 5,
                display: "flex",
              }}
            >
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: "0.8em",
                }}
              >
                Chennai Supar King
              </Typography>

              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Card
                    style={{
                      marginRight: 2,
                      backgroundColor: "#91e5fa",
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    2.21
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "#f582b0",
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    2.54
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card elevation={4}>
          <div
            style={{
              margin: 5,
              display: "flex",
            }}
          >
            <Typography
              style={{
                fontWeight: 600,
                fontSize: "0.8em",
              }}
            >
              Delhi Capitals
            </Typography>
            <div
              style={{
                marginLeft: "auto",
              }}
            >
              <div style={{ display: "flex" }}>
                <Card
                  style={{
                    marginRight: 2,
                    backgroundColor: "#91e5fa",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  2.21
                </Card>
                <Card
                  style={{
                    backgroundColor: "#f582b0",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  2.54
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className={classes.fab}>
        <Avatar elevation={4} onClick={() => router.push("/Cricket/myMarkets")}>
          <Visibility />
        </Avatar>
      </div>
    </div>
  );
}

export default CricketMarket;
