import {
  Avatar,
  makeStyles,
  Typography,
  useRadioGroup,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function MyMarket(props) {
  const classes = useStyle();
  const router = useRouter();

  return (
    <div>
      <Typography
        style={{
          marginTop: 10,
          fontWeight: 600,
          fontSize: "1.2em",
        }}
      >
        My Market
      </Typography>
      <Typography>You have no open bets</Typography>
      <div className={classes.fab}>
        <Avatar elevation={4} onClick={() => router.push("/Cricket/myMarkets")}>
          <Visibility />
        </Avatar>
      </div>
    </div>
  );
}

export default MyMarket;
