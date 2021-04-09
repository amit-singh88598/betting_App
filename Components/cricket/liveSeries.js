import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { Router } from "@material-ui/icons";
import { useRouter } from "next/router";
import React from "react";

function LiveSeries(props) {
  const router = useRouter();
  return (
    <div>
      <Typography style={{ fontSize: "1.8em", fontWeight: 500 }}>
        Cricket
      </Typography>
      <Typography style={{ fontSize: "1em", fontWeight: 500 }}>
        Competitions
      </Typography>
      <div style={{ marginTop: 20 }}>
        <ButtonGroup
          fullWidth
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button
            onClick={() => router.push("/Cricket/matchDetails")}
            style={{ marginBottom: 2 }}
          >
            Indian Premier League
          </Button>
          <Button
            onClick={() => router.push("/Cricket/matchDetails")}
            style={{ marginBottom: 2 }}
          >
            Womens One Day International
          </Button>
          <Button onClick={() => router.push("/Cricket/matchDetails")}>
            International Twenty20 Matches
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default LiveSeries;
