import {
  Button,
  ButtonGroup,
  Card,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    marginBottom: 2,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: 5,
  },
}));

function MatchDetail(props) {
  const classes = useStyle();
  const router = useRouter();
  return (
    <div>
      <Typography style={{ fontSize: "1.8em", fontWeight: 500 }}>
        Indian Premier League
      </Typography>
      <div style={{ marginTop: 20 }}>
        <ButtonGroup
          fullWidth
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Card
            onClick={() => router.push("/Cricket/market")}
            className={classes.cardStyle}
          >
            <Typography>Mumbai Indians v Royal Challenger Banglore</Typography>
            <div style={{ display: "flex" }}>
              <Typography>09-04-2021</Typography>
              <Typography
                style={{ marginLeft: 10, fontSize: "0.8em", marginTop: 3 }}
              >
                19:30:00
              </Typography>
            </div>
          </Card>
          <Card
            onClick={() => router.push("/Cricket/market")}
            className={classes.cardStyle}
          >
            <Typography>Chennai Super Kings v Delhi Capitals</Typography>
            <div style={{ display: "flex" }}>
              <Typography>10-04-2021</Typography>
              <Typography
                style={{ marginLeft: 10, fontSize: "0.8em", marginTop: 3 }}
              >
                19:30:00
              </Typography>
            </div>
          </Card>
          <Card
            onClick={() => router.push("/Cricket/market")}
            className={classes.cardStyle}
          >
            <Typography>Sunrisers Hydrabad v Kolkata Knight Riders</Typography>
            <div style={{ display: "flex" }}>
              <Typography>11-04-2021</Typography>
              <Typography
                style={{ marginLeft: 10, fontSize: "0.8em", marginTop: 3 }}
              >
                19:30:00
              </Typography>
            </div>
          </Card>
          <Card
            onClick={() => router.push("/Cricket/market")}
            className={classes.cardStyle}
          >
            <Typography>Rajasthan Royals v Punjab Kings</Typography>
            <div style={{ display: "flex" }}>
              <Typography>12-04-2021</Typography>
              <Typography
                style={{ marginLeft: 10, fontSize: "0.8em", marginTop: 3 }}
              >
                19:30:00
              </Typography>
            </div>
          </Card>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default MatchDetail;
