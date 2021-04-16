import { Avatar, Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";
import CricketNavItem from "./cricketNavItem";
import LiveScoreCard from "./liveScoreCard";
import Match1Odds from "./match1Odds";
import Match2Odds from "./match2Odds";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headingStyle: {
    marginTop: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },

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

function CricketLive(props) {
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

      <LiveScoreCard />

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
            marginLeft: 5,
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
      <div>
        <div className={classes.root}>
          <Accordion>
            <Paper className={classes.headingStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Chennai Super King
                </Typography>
                <Typography
                  style={{ marginLeft: "auto", marginRight: 10 }}
                  className={classes.heading}
                >
                  0.00
                </Typography>
              </AccordionSummary>
            </Paper>
            <AccordionDetails>
              <Match1Odds />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <Paper className={classes.headingStyle}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#ffffff" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Delhi Capitals
                </Typography>
                <Typography
                  style={{ marginLeft: "auto", marginRight: 10 }}
                  className={classes.heading}
                >
                  0.00
                </Typography>
              </AccordionSummary>
            </Paper>
            <AccordionDetails>
              <Match2Odds />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={classes.fab}>
        <Avatar elevation={4} onClick={() => router.push("/Cricket/myMarkets")}>
          <Visibility />
        </Avatar>
      </div>
    </div>
  );
}

export default CricketLive;
