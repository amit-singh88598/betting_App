import { Card, Divider, Typography } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import React from "react";

function RecentMatch(props) {
  return (
    <div style={{ padding: 20 }}>
      <Typography style={{ fontSize: "1.8em" }}>Cricket</Typography>
      <Divider />
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
          Match
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
              1
            </Typography>
            <Typography
              style={{ marginRight: 75, fontWeight: 600, fontSize: "0.9em" }}
            >
              X
            </Typography>
            <Typography
              style={{ marginRight: 35, fontWeight: 600, fontSize: "0.9em" }}
            >
              2
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <Card style={{ padding: 10 }}>
          <Favorite />
        </Card>
      </div>
    </div>
  );
}

export default RecentMatch;
